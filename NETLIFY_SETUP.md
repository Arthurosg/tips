# Configuração Netlify - Resolver erro "publish directory same as base directory"

## Problema
O plugin `@netlify/plugin-nextjs` não permite que o publish directory seja o mesmo que o base directory.

## Solução

### No Painel da Netlify:

1. Acesse **Site settings** → **Build & deploy** → **Build settings**

2. **IMPORTANTE - Configure os seguintes campos:**

   - **Base directory**: DEIXE EM BRANCO (não coloque nada, nem `.`)
   - **Publish directory**: DEIXE EM BRANCO (o plugin Next.js gerencia isso automaticamente)
   - **Build command**: DEIXE EM BRANCO (o `netlify.toml` já define)

3. **Salve as configurações**

4. **Faça um novo deploy** (ou aguarde o deploy automático do push)

### Por que isso acontece?

O plugin `@netlify/plugin-nextjs` cria automaticamente um diretório `.opennext` com os arquivos processados. Quando você especifica um publish directory no painel (mesmo que seja o padrão `/opt/build/repo`), o plugin detecta que é o mesmo do base directory e gera o erro.

### Arquivos de configuração

- `netlify.toml`: Já configurado corretamente (sem publish directory especificado)
- O plugin Next.js gerencia tudo automaticamente

