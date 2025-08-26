# pyimageproc

# 📷 pyimageproc

`pyimageproc` é um pacote em Python para **processamento de imagens**, oferecendo funções simples e eficientes para manipulação, análise e transformação de imagens.  
Ideal para estudantes, entusiastas e desenvolvedores que desejam explorar técnicas de visão computacional de forma prática.

---

## ✨ Funcionalidades

- Leitura e salvamento de imagens.
- Conversão entre formatos (JPEG, PNG, etc).
- Redimensionamento, corte e rotação.
- Aplicação de filtros básicos.
- Transformações em escala de cinza.
- Preparação de imagens para modelos de **Visão Computacional**.

---

## 🚀 Instalação

No futuro estará disponível no **PyPI** via `pip`.  
Por enquanto, clone o repositório:

```bash
git clone https://github.com/seu-usuario/pyimageproc.git
cd pyimageproc
```

Se quiser instalar localmente:

```bash
pip install -e
```

## 🛠️ Como Usar

Exemplo simples:

```
    from pyimageproc import ImageProcessor

    # Carregar imagem
    img = ImageProcessor.load("exemplo.jpg")

    # Converter para escala de cinza
    gray = ImageProcessor.to_grayscale(img)

    # Salvar imagem processada
    ImageProcessor.save(gray, "saida.jpg")
```

## 📂 Estrutura do Projeto

```
pyimageproc/
│── pyimageproc/
│   ├── __init__.py
│   ├── image_processor.py
│── tests/
│── README.md
│── setup.py (ou pyproject.toml futuramente)
```

## 🤝 Contribuição

Contribuições são bem-vindas!
Para contribuir:

Faça um fork do repositório.

Crie uma branch (git checkout -b feature/nova-funcionalidade).

Commit suas mudanças (git commit -m "feat: descrição da mudança").

Faça um push (git push origin feature/nova-funcionalidade).

Abra um Pull Request.

## 📜 Licença

Este projeto está sob a licença MIT.