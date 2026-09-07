import sharp from 'sharp';

async function enhanceShorts2() {
  const meta2 = await sharp('public/images/products/shorts-02.jpg').metadata();
  const width2 = meta2.width;
  const height2 = meta2.height;

  const svgVignette2 = `
  <svg width="${width2}" height="${height2}" xmlns="http://www.w3.org/2000/svg">
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

  await sharp('public/images/products/shorts-02.jpg')
    .modulate({
      brightness: 0.94,
      saturation: 0.88
    })
    .composite([
      { input: Buffer.from(svgVignette2), blend: 'over' }
    ])
    .jpeg({ quality: 92 })
    .toFile('public/images/products/shorts-02-toned.jpg');

  console.log('Created shorts-02-toned.jpg');
}

enhanceShorts2();
