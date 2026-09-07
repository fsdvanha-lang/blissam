import sharp from 'sharp';

async function enhanceBag() {
  // Read bag-avantgarde-01.jpg
  // Note: let's inspect the original orientation first
  const meta = await sharp('public/images/products/bag-avantgarde-01.jpg').metadata();
  console.log('Original meta:', meta.width, meta.height, meta.orientation);

  // We want an upright image with balanced tone
  // Let's create an SVG vignette overlay
  const width = meta.width;
  const height = meta.height;

  // SVG radial vignette with dark corners and softened door highlights
  const svgVignette = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="vignette" cx="50%" cy="52%" r="65%" fx="50%" fy="52%">
        <stop offset="0%" stop-color="#000000" stop-opacity="0" />
        <stop offset="45%" stop-color="#000000" stop-opacity="0.15" />
        <stop offset="75%" stop-color="#000000" stop-opacity="0.55" />
        <stop offset="100%" stop-color="#050505" stop-opacity="0.88" />
      </radialGradient>
      <linearGradient id="topShadow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#050505" stop-opacity="0.6" />
        <stop offset="25%" stop-color="#050505" stop-opacity="0" />
        <stop offset="80%" stop-color="#050505" stop-opacity="0" />
        <stop offset="100%" stop-color="#050505" stop-opacity="0.75" />
      </linearGradient>
    </defs>
    <!-- Soft dark tint over bright areas -->
    <rect width="100%" height="100%" fill="#0a0a0c" opacity="0.18" />
    <rect width="100%" height="100%" fill="url(#vignette)" />
    <rect width="100%" height="100%" fill="url(#topShadow)" />
  </svg>`;

  // Process image:
  // 1. Modulate: slightly reduce brightness (0.92) to eliminate blinding white door, increase contrast (1.08) so blacks pop
  // 2. Composite the vignette overlay
  await sharp('public/images/products/bag-avantgarde-01.jpg')
    .modulate({
      brightness: 0.90,
      saturation: 0.85 // desaturate warm yellow sunlight on the door for a cooler, sleeker editorial look
    })
    .composite([
      {
        input: Buffer.from(svgVignette),
        blend: 'over'
      }
    ])
    .jpeg({ quality: 92 })
    .toFile('public/images/products/bag-avantgarde-01-toned.jpg');

  console.log('Successfully created bag-avantgarde-01-toned.jpg');
}

enhanceBag();
