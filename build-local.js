#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('Building for production with local config...');

// Use the local vite config for building
const viteProcess = spawn('npx', ['vite', 'build', '--config', 'vite.config.local.js'], {
  stdio: 'inherit',
  cwd: __dirname
});

viteProcess.on('close', (code) => {
  if (code === 0) {
    console.log('✅ Build completed successfully!');
    console.log('📁 Static files are in the "dist" directory');
    console.log('🚀 Ready for deployment to Netlify');
  } else {
    console.log(`❌ Build process exited with code ${code}`);
  }
});

viteProcess.on('error', (err) => {
  console.error('Failed to start build:', err);
});