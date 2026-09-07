import sharp from 'sharp';

async function processBag() {
  const inputPath = 'public/images/products/bag-avantgarde-01.jpg';
  const outputPath = 'public/images/products/bag-avantgarde-01-darkbg.jpg';

  const { data, info } = await sharp(inputPath)
    .rotate() // auto-orient if needed
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  const outData = Buffer.from(data);

  // We want to darken light background pixels (door) while preserving the bag itself (dark fur, silver hardware).
  // In the bag, silver rivets have high luminance, but are inside the bag region.
  // The bag is in the center/bottom, straps go up.
  // Let's create an algorithm that smoothly darkens the bright background.
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      const lum = 0.299 * r + 0.587 * g + 0.114 * b;

      // If luminance is high, check if it's the background
      // The background door has warmish/grey tone and high luminance (e.g. lum > 110)
      if (lum > 70) {
        // Darken progressively based on luminance
        // Turn bright areas into dark charcoal/graphite (#121214)
        const factor = Math.max(0.12, 1 - (lum / 255) * 0.78);
        outData[idx] = Math.round(r * factor);
        outData[idx + 1] = Math.round(g * factor * 0.98);
        outData[idx + 2] = Math.round(b * factor * 1.02);
      }
    }
  }

  await sharp(outData, {
    raw: { width, height, channels }
  })
  .jpeg({ quality: 92 })
  .toFile(outputPath);

  console.log('Saved to', outputPath);
}

processBag();
