# Configuração Manual Netlify (Sem Plugin Next.js)

## O que foi feito:

1. ✅ **Removido o plugin `@netlify/plugin-nextjs`** do `netlify.toml`
2. ✅ **Configurado publish directory** como `.next/static`
3. ✅ **Configurado redirects** para SPA behavior

## ⚠️ Limitações Importantes:

Sem o plugin Next.js, há algumas limitações:

1. **Rotas de API podem não funcionar**: As rotas em `src/app/api/*` podem precisar ser convertidas para serverless functions manuais
2. **Rotas dinâmicas**: Páginas dinâmicas podem precisar de configuração adicional
3. **ISR (Incremental Static Regeneration)**: Não funcionará sem o plugin

## Configuração no Painel Netlify:

Certifique-se que no painel da Netlify:

- **Base directory**: Deixe em branco ou `.`
- **Publish directory**: Deixe em branco (o `netlify.toml` define como `.next/static`)
- **Build command**: Deixe em branco (o `netlify.toml` define)

## Se as APIs não funcionarem:

Você pode precisar criar serverless functions manuais em `netlify/functions/` para as rotas de API, ou considerar:
1. Usar outro serviço de hospedagem (Vercel é otimizado para Next.js)
2. Converter as APIs para usar serverless functions do Netlify manualmente
3. Voltar a usar o plugin Next.js (mas resolver o problema do publish directory)

## Teste o Deploy:

Faça um novo deploy e verifique:
1. Se o build passa ✅
2. Se as páginas estáticas funcionam ✅
3. Se as rotas de API funcionam ⚠️ (pode precisar ajustes)

