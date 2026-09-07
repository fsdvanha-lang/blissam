import sharp from 'sharp';

async function analyze() {
  const meta = await sharp('public/images/products/bag-avantgarde-01.jpg').metadata();
  console.log('Metadata:', meta);
  
  // Sample a few pixels from corners and background
  const { data, info } = await sharp('public/images/products/bag-avantgarde-01.jpg')
    .resize(300, 400)
    .raw()
    .toBuffer({ resolveWithObject: true });
    
  console.log(`Resized buffer length: ${data.length}, width: ${info.width}, height: ${info.height}`);
  
  // check corners
  // top-left pixel
  console.log('Top-left (0,0):', data[0], data[1], data[2]);
  // top-right pixel
  const trIdx = (info.width - 1) * 3;
  console.log('Top-right:', data[trIdx], data[trIdx+1], data[trIdx+2]);
  // bottom-left
  const blIdx = ((info.height - 1) * info.width) * 3;
  console.log('Bottom-left:', data[blIdx], data[blIdx+1], data[blIdx+2]);
}

analyze();
