// Script para preparar build estático - move pasta api para fora de src/app
const fs = require('fs');
const path = require('path');

const apiPath = path.join(__dirname, '../src/app/api');
const apiBackupPath = path.join(__dirname, '../api_backup');

if (fs.existsSync(apiPath)) {
  try {
    // Remove backup anterior se existir
    if (fs.existsSync(apiBackupPath)) {
      fs.rmSync(apiBackupPath, { recursive: true, force: true });
    }
    // Move a pasta api para fora de src/app completamente
    fs.renameSync(apiPath, apiBackupPath);
    console.log('✅ Pasta api movida para api_backup (fora de src/app)');
  } catch (error) {
    console.error('⚠️ Erro ao mover pasta api:', error.message);
    process.exit(1);
  }
} else {
  console.log('ℹ️ Pasta api não encontrada, continuando...');
}

