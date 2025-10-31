# Configuração Netlify - Resolver erro "publish directory same as base directory"

## Problema
O plugin `@netlify/plugin-nextjs` não permite que o publish directory seja o mesmo que o base directory. O Netlify está usando `/opt/build/repo` como padrão, causando conflito.

## Solução CRÍTICA - No Painel da Netlify:

### Passo a passo detalhado:

1. Acesse https://app.netlify.com e selecione seu site

2. Clique em **Site settings** (ícone de engrenagem no topo)

3. No menu lateral esquerdo, clique em **Build & deploy**

4. Clique em **Build settings**

5. **ROLE A PÁGINA ATÉ A SEÇÃO "Build & deploy settings"**

6. Procure pelos seguintes campos e **APAGUE COMPLETAMENTE** qualquer valor:

   **⚠️ Base directory:**
   - Se houver algum valor (mesmo que seja `.` ou `/`), APAGUE TUDO
   - Deixe o campo completamente vazio/branco
   - Não coloque nenhum caractere, nem espaço

   **⚠️ Publish directory:**
   - Se houver algum valor (como `.next` ou qualquer coisa), APAGUE TUDO
   - Deixe o campo completamente vazio/branco
   - Este é o campo MAIS IMPORTANTE - deve estar 100% vazio

   **⚠️ Build command:**
   - Se houver algum valor, APAGUE TUDO
   - Deixe vazio (o `netlify.toml` já define)

7. **Clique em "Save"** ou "Save settings" (geralmente no topo ou rodapé da página)

8. **Verifique novamente** que os campos estão realmente vazios (não com espaços)

9. Vá em **Deploys** → **Trigger deploy** → **Deploy site** para fazer um novo deploy

### Verificação Visual:

Os campos devem aparecer assim:
```
Base directory: [campo completamente vazio]
Publish directory: [campo completamente vazio]  
Build command: [campo completamente vazio]
```

**NÃO deve ter:**
- Pontos (`.`)
- Barras (`/`)
- Espaços em branco
- Qualquer texto

### Por que isso acontece?

O plugin `@netlify/plugin-nextjs` cria automaticamente um diretório `.opennext` durante o build. Quando qualquer valor está definido no campo "Publish directory" do painel (mesmo que seja o padrão automático), o plugin detecta que é igual ao base directory e gera o erro.

### Arquivos de configuração

- `netlify.toml`: Configurado com `base = "."` e sem `publish` (deixa o plugin gerenciar)
- O plugin Next.js gerencia o publish directory automaticamente criando `.opennext`

### Se ainda não funcionar:

Se após seguir todos os passos o erro persistir, pode ser necessário:
1. Desconectar e reconectar o repositório GitHub
2. Ou remover o plugin e usar configuração manual (arquivo `netlify.toml.backup` como referência)

