# 🎥 Como Adicionar Seu Vídeo de Fundo - ProPhase

## 📁 Onde colocar o vídeo:

1. **Navegue até a pasta:** `public/videos/`
2. **Coloque seu vídeo** nesta pasta
3. **Renomeie para:** `background-video.mp4`

## 📋 Especificações recomendadas:

### ✅ **Formato:**
- **MP4** (recomendado)
- **WebM** (opcional, para melhor compatibilidade)

### ✅ **Resolução:**
- **1920x1080** (Full HD) ou maior
- **Proporção:** 16:9 (widescreen)

### ✅ **Duração:**
- **10-30 segundos** (loop automático)
- **Sem cortes abruptos** no início/fim

### ✅ **Tamanho:**
- **Máximo 50MB** para melhor performance
- **Codec:** H.264 para MP4

## 🎨 **Dicas de Conteúdo:**

- Use vídeos com **movimento sutil**
- Prefira **tons escuros** que combinem com o tema ametista
- Evite texto ou elementos que distraiam do conteúdo
- Teste a **performance** em diferentes dispositivos

## 📂 **Estrutura de arquivos:**

```
minha-plataforma/
  public/
    videos/
      background-video.mp4  ← Seu vídeo aqui
      background-video.webm ← Opcional
    valorant-jett.jpg       ← Fallback (já existe)
```

## 🔄 **Fallback Automático:**

- Se o vídeo não carregar, a imagem do Valorant será usada
- Se houver erro, um fundo animado será exibido
- O sistema funciona mesmo sem vídeo

## 🚀 **Testando:**

1. Coloque seu vídeo na pasta `public/videos/`
2. Renomeie para `background-video.mp4`
3. Acesse `http://localhost:3000`
4. O vídeo deve aparecer automaticamente

## ⚠️ **Problemas comuns:**

- **Vídeo não aparece:** Verifique se o arquivo está em `public/videos/background-video.mp4`
- **Vídeo não reproduz:** Alguns navegadores bloqueiam autoplay - clique no vídeo para reproduzir
- **Vídeo muito pesado:** Comprima o vídeo para menos de 50MB
- **Vídeo não em loop:** Verifique se o vídeo tem loop perfeito (sem cortes)

## 🎯 **Exemplo de vídeo ideal:**

- Cena de jogo com ação suave
- Tons escuros com acentos roxos/ametista
- Duração: 15-20 segundos
- Loop perfeito
- Tamanho: 20-30MB

**Seu vídeo aparecerá como fundo da página inicial, similar ao Tipspace!** 🎮
