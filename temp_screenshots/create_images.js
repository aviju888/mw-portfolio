// This script uses puppeteer to take screenshots of each preview
// You'll need to run: npm install puppeteer
// Then: node create_images.js

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to ensure consistent size
  await page.setViewport({ width: 1200, height: 800 });
  
  // Load the HTML file
  const htmlPath = path.join(__dirname, '../public/images/paper-previews/generate-previews.html');
  await page.goto('file://' + htmlPath);
  
  // Wait for content to load
  await page.waitForSelector('.preview-container');
  
  // Get all preview elements
  const previewIds = await page.evaluate(() => {
    const previews = document.querySelectorAll('.preview');
    return Array.from(previews).map(preview => preview.id);
  });
  
  // Create output directory if it doesn't exist
  const outputDir = path.join(__dirname, '../public/images/paper-previews');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Take screenshots of each preview
  for (const id of previewIds) {
    const element = await page.$(`#${id}`);
    if (element) {
      await element.screenshot({
        path: path.join(outputDir, `${id}.jpg`),
        type: 'jpeg',
        quality: 90
      });
      console.log(`Created screenshot for ${id}`);
    }
  }
  
  await browser.close();
  console.log('All screenshots created successfully!');
})(); 