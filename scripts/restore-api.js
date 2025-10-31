// Script para restaurar pasta api após o build
const fs = require('fs');
const path = require('path');

const apiPath = path.join(__dirname, '../src/app/api');
const apiBackupPath = path.join(__dirname, '../src/app/api.bak');

if (fs.existsSync(apiBackupPath)) {
  try {
    // Restaura a pasta api
    fs.renameSync(apiBackupPath, apiPath);
    console.log('✅ Pasta api restaurada');
  } catch (error) {
    console.error('⚠️ Erro ao restaurar pasta api:', error.message);
  }
}

