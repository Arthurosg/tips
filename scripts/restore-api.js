// Script para restaurar pasta api após o build
const fs = require('fs');
const path = require('path');

const apiPath = path.join(__dirname, '../src/app/api');
const apiBackupPath = path.join(__dirname, '../api_backup');

if (fs.existsSync(apiBackupPath)) {
  try {
    // Remove pasta api se existir (pode ter sido criada)
    if (fs.existsSync(apiPath)) {
      fs.rmSync(apiPath, { recursive: true, force: true });
    }
    // Restaura a pasta api de volta para src/app
    fs.renameSync(apiBackupPath, apiPath);
    console.log('✅ Pasta api restaurada em src/app/api');
  } catch (error) {
    console.error('⚠️ Erro ao restaurar pasta api:', error.message);
  }
}

