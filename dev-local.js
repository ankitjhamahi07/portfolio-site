#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Use the local vite config for development
const viteProcess = spawn('npx', ['vite', '--config', 'vite.config.local.js'], {
  stdio: 'inherit',
  cwd: __dirname
});

viteProcess.on('close', (code) => {
  console.log(`Vite process exited with code ${code}`);
});

viteProcess.on('error', (err) => {
  console.error('Failed to start Vite:', err);
});