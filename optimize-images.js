const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public');
const exts = ['.jpg', '.jpeg', '.png'];

function walk(dir) {
  let files = [];
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(walk(fullPath));
    } else if (exts.includes(path.extname(fullPath).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

(async () => {
  const images = walk(inputDir);
  for (const img of images) {
    const out = img.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    await sharp(img)
      .webp({ quality: 80 })
      .toFile(out);
    // Orijinal dosyayı silmek isterseniz aşağıdaki satırı açın:
    // fs.unlinkSync(img);
    console.log(`Optimized: ${img} -> ${out}`);
  }
})(); 