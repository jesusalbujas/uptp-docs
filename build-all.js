import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const rootDir = process.cwd();
const landingDir = path.join(rootDir, 'landing-page');
const docsSrcDir = path.join(rootDir, 'src');
const distDir = path.join(rootDir, 'dist');

// Ensure dist directory exists and is empty
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir);

console.log('🚀 Building Landing Page (React)...');
try {
    execSync('npm install && npm run build', { cwd: landingDir, stdio: 'inherit' });
} catch (error) {
    console.error('Failed to build landing page');
    process.exit(1);
}

console.log('📦 Moving Landing Page to dist...');
// Copy landing page build to dist
fs.cpSync(path.join(landingDir, 'dist'), distDir, { recursive: true });

console.log('📚 Building Documentation (VuePress)...');
try {
    // We need to run the build command from the root package.json
    execSync('npm run docs:build', { cwd: rootDir, stdio: 'inherit' });
} catch (error) {
    console.error('Failed to build documentation');
    process.exit(1);
}

console.log('📂 Moving Documentation to dist/docs...');
const docsDistDir = path.join(rootDir, 'src/.vuepress/dist');
const targetDocsDir = path.join(distDir, 'docs');

if (fs.existsSync(docsDistDir)) {
    fs.cpSync(docsDistDir, targetDocsDir, { recursive: true });
} else {
    console.error('Documentation build directory not found!');
    process.exit(1);
}

console.log('✅ Build Complete! The combined site is in the "dist" directory.');
