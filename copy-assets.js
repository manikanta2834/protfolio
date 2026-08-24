import fs from 'fs';
import path from 'path';

const sourceImg = "C:/Users/Manikanta/.gemini/antigravity/brain/142a92a4-76f8-4215-b07b-ed57abda06db/.user_uploaded/media_1787584698131.jpg";
const sourceResume = "C:/Users/Manikanta/.gemini/antigravity/brain/142a92a4-76f8-4215-b07b-ed57abda06db/.user_uploaded/media_1787585833995.pdf";
const publicDir = './public';
const destImg = path.join(publicDir, 'profile.jpg');
const destResume = path.join(publicDir, 'resume.pdf');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Copy profile image if source exists
if (fs.existsSync(sourceImg)) {
  try {
    fs.copyFileSync(sourceImg, destImg);
    console.log(`Successfully copied profile image to ${destImg}`);
  } catch (error) {
    console.error(`Failed to copy profile image:`, error);
  }
} else {
  console.warn(`Profile image source not found at ${sourceImg}. Make sure to place a 'profile.jpg' in the public/ folder.`);
}

// Copy resume PDF if source exists
if (fs.existsSync(sourceResume)) {
  try {
    fs.copyFileSync(sourceResume, destResume);
    console.log(`Successfully copied resume PDF to ${destResume}`);
  } catch (error) {
    console.error(`Failed to copy resume PDF:`, error);
  }
} else if (!fs.existsSync(destResume)) {
  try {
    fs.writeFileSync(destResume, 'This is a placeholder for Manikanta Nalam\'s resume. Please replace this file with your real resume PDF.');
    console.log(`Created placeholder resume.pdf at ${destResume}`);
  } catch (error) {
    console.error(`Failed to write placeholder resume.pdf:`, error);
  }
}
