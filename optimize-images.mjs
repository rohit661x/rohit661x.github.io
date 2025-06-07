import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimizeImages() {
  try {
    // Install sharp if not already installed
    await import('sharp').catch(() => {
      console.log('Installing sharp...');
      require('child_process').execSync('npm install sharp');
    });

    const publicDir = path.join(process.cwd(), 'public', 'images');
    
    async function processDirectory(dirPath) {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        
        if (entry.isDirectory()) {
          await processDirectory(fullPath);
        } else if (entry.isFile() && /\.(jpg|jpeg)$/i.test(entry.name)) {
          console.log(`Optimizing: ${fullPath}`);
          
          const image = sharp(fullPath);
          const metadata = await image.metadata();
          
          // Only resize if image is larger than 1920px in either dimension
          if (metadata.width > 1920 || metadata.height > 1920) {
            await image
              .resize(1920, 1920, {
                fit: 'inside',
                withoutEnlargement: true
              })
              .jpeg({ quality: 80 })
              .toBuffer()
              .then(data => fs.writeFile(fullPath, data));
          } else {
            // Just compress if no resize needed
            await image
              .jpeg({ quality: 80 })
              .toBuffer()
              .then(data => fs.writeFile(fullPath, data));
          }
        }
      }
    }

    await processDirectory(publicDir);
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error:', error);
  }
}

optimizeImages(); 