/** @type {import('next').NextConfig} */
const nextConfig = {
  // Para Netlify sem plugin, usar export estático
  // ATENÇÃO: Isso desabilita rotas de API server-side, rewrites e headers dinâmicos
  output: 'export',
  eslint: {
    // Permite warnings durante o build, mas mantém erros bloqueando
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Permite o build mesmo com erros de TypeScript (opcional)
    ignoreBuildErrors: false,
  },
  // Nota: rewrites e headers não podem ser usados com output: 'export'
  // Se precisar dessas funcionalidades, considere usar o plugin Next.js ou Vercel
}

module.exports = nextConfig
