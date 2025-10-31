## Setup do Ambiente (Next.js + TypeScript + Tailwind)

### Requisitos
- Node.js 18+ (recomendado LTS) e npm 9+
- Windows PowerShell, cmd, ou WSL (opcional)

### 1) Instalar dependências
```bash
npm install
```

### 2) Variáveis de ambiente
- Copie `config-example.env` para `.env.local` e ajuste os valores:
```bash
copy config-example.env .env.local
```
- Campos comuns:
  - `NEXTAUTH_URL=http://localhost:3000`
  - `NEXTAUTH_SECRET=uma-chave-segura` (use um valor aleatório forte)
  - Se usar banco: defina `DATABASE_URL`

### 3) Rodar em desenvolvimento
```bash
npm run dev
```
O app ficará disponível em `http://localhost:3000`.

### 4) Build e produção
```bash
npm run build
npm start
```

### 5) Tecnologias e versões
- Next.js `13.5.11`
- React `18`
- TypeScript `5`
- TailwindCSS `3`

### 6) Dicas
- Os caminhos `@/*` mapeiam para `src/*` (veja `tsconfig.json`).
- Arquivos `.env*.local` estão no `.gitignore` e não devem ser commitados.
- Se usar NextAuth, mantenha `NEXTAUTH_SECRET` seguro.


