// Script para preparar build estático - renomeia pasta api se existir
const fs = require('fs');
const path = require('path');

const apiPath = path.join(__dirname, '../src/app/api');
const apiBackupPath = path.join(__dirname, '../src/app/api.bak');

if (fs.existsSync(apiPath)) {
  try {
    // Renomeia a pasta api para api.bak
    fs.renameSync(apiPath, apiBackupPath);
    console.log('✅ Pasta api renomeada para api.bak');
  } catch (error) {
    console.error('⚠️ Erro ao renomear pasta api:', error.message);
    // Se já existe api.bak, não faz nada
    if (error.code !== 'EEXIST') {
      process.exit(1);
    }
  }
} else {
  console.log('ℹ️ Pasta api não encontrada, continuando...');
}

