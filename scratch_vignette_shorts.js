import sharp from 'sharp';

async function enhanceShorts() {
  const meta1 = await sharp('public/images/products/shorts-01.jpg').metadata();
  const width1 = meta1.width;
  const height1 = meta1.height;

  const svgVignette1 = `
  <svg width="${width1}" height="${height1}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="vignette" cx="50%" cy="50%" r="68%" fx="50%" fy="48%">
        <stop offset="0%" stop-color="#000000" stop-opacity="0" />
        <stop offset="45%" stop-color="#000000" stop-opacity="0.1" />
        <stop offset="78%" stop-color="#000000" stop-opacity="0.5" />
        <stop offset="100%" stop-color="#050505" stop-opacity="0.82" />
      </radialGradient>
      <linearGradient id="bottomShadow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#050505" stop-opacity="0.45" />
        <stop offset="18%" stop-color="#050505" stop-opacity="0" />
        <stop offset="75%" stop-color="#050505" stop-opacity="0" />
        <stop offset="100%" stop-color="#050505" stop-opacity="0.75" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="#08080a" opacity="0.12" />
    <rect width="100%" height="100%" fill="url(#vignette)" />
    <rect width="100%" height="100%" fill="url(#bottomShadow)" />
  </svg>`;

  await sharp('public/images/products/shorts-01.jpg')
    .modulate({
      brightness: 0.94,
      saturation: 0.88
    })
    .composite([
      { input: Buffer.from(svgVignette1), blend: 'over' }
    ])
    .jpeg({ quality: 92 })
    .toFile('public/images/products/shorts-01-toned.jpg');

  console.log('Created shorts-01-toned.jpg');
}

enhanceShorts();
