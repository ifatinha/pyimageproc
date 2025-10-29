# 🌌 Galaxy WebApp

O **Galaxy WebApp** é um projeto minimalista e moderno desenvolvido para praticar e demonstrar, na prática, os principais conceitos do **ecossistema JavaScript moderno** — incluindo:

- ✅ **npm** e **npx**
- ✅ **Módulos CommonJS** e **ES Modules**
- ✅ **Babel** para transpilar código
- ✅ **Webpack** para empacotar e otimizar
- ✅ **Day.js** para manipulação de datas
- ✅ **Git e GitHub Pages** para versionamento e publicação

---

## 🎯 Objetivo

O objetivo deste projeto é **consolidar o aprendizado** sobre as ferramentas que compõem o ambiente moderno de desenvolvimento front-end, entendendo **como cada parte se conecta**:

- Como organizar módulos e dependências com npm;
- Como usar Babel para compatibilidade entre navegadores;
- Como empacotar tudo com Webpack;
- E, por fim, como **publicar o resultado final** com GitHub Pages.

---

## 🧩 Funcionalidades

- Exibição de informações com data e hora atual formatada com **Day.js**;
- Interface minimalista, responsiva e elegante feita com **HTML + CSS moderno**;
- Código modularizado e empacotado com **Webpack**;
- Compatibilidade com navegadores antigos garantida pelo **Babel**.

---

## 🖼️ Demonstração

> 🌍 **Veja o projeto online:**  
> [https://ifatinha.github.io/galaxy-starter](https://ifatinha.github.io/galaxy-starter/)

---

## 🧱 Estrutura do projeto

```bash
galaxy-webapp/
├── dist/              # Código empacotado e pronto para produção
│   ├── index.html
│   ├── style.css
│   └── bundle.js
│
├── src/               # Código-fonte original
│   ├── index.js
│   ├── modules/
│   │   └── formatarData.js
│   └── styles/
│       └── main.css
│
├── package.json       # Configuração dos scripts npm e dependências
├── webpack.config.js  # Configuração do empacotamento
├── babel.config.json  # Configuração do Babel
└── README.md
```

# Tecnologias usadas

| Ferramenta             | Função                                              |
| ---------------------- | --------------------------------------------------- |
| **HTML5**              | Estrutura base da aplicação                         |
| **CSS3 (moderno)**     | Estilos minimalistas e responsivos                  |
| **JavaScript (ES6+)**  | Lógica da aplicação                                 |
| **Day.js**             | Manipulação e formatação de datas                   |
| **Babel**              | Transpilar código moderno para versões compatíveis  |
| **Webpack**            | Empacotamento e otimização do código                |
| **npm / npx**          | Gerenciamento de dependências e execução de scripts |
| **Git & GitHub Pages** | Controle de versão e publicação online              |

# Conceitos abordados

- **npm e package.json** (scripts e dependências)
- **Módulos:** ES Modules (import/export)
- **Babel:** preset-env para compatibilidade
- **Webpack:** loaders (babel-loader, css-loader), plugins (HtmlWebpackPlugin, MiniCssExtractPlugin)
- **webpack-dev-server:** ambiente de desenvolvimento com HMR
- **Boas práticas:** separar `src/` e `dist/`, usar `.gitignore`, ter README detalhado

# 💻 Como executar localmente

## 1️⃣ Clonar o repositório

```git clone https://github.com/ifatinha/galaxy-starter.git
cd galaxy-webapp
```

## 2️⃣ Instalar as dependências

```
npm install
```

## 3️⃣ Rodar o ambiente de desenvolvimento

```
npm start
```

## 4️⃣ Gerar o build de produção

```
npm run build
```

# 🚀 Publicação no GitHub Pages

```
npm run deploy
```

📦 Scripts npm disponíveis
| Comando | Descrição |
| ---------------- | ------------------------------------------------ |
| `npm start` | Inicia o servidor de desenvolvimento com Webpack |
| `npm run build` | Gera o bundle otimizado na pasta `dist` |
| `npm run deploy` | Faz o build e publica no GitHub Pages |

🤝 Contribuições

1. Fork o repositório
2. Crie uma branch `feature/minha-mudanca`
3. Faça commits claros
4. Abra um pull request

Sinta-se à vontade para abrir issues e enviar pull requests com melhorias, ideias de novos recursos ou correções de bugs!

🪄 Autor(a)
👩‍💻 Fatinha

Feito com ❤️ e curiosidade infinita pelo universo do JavaScript.

## Licença

Este projeto está licenciado sob a [Licença MIT](./LICENSE).
Este projeto é de uso livre para fins de estudo e aprendizado.
Sinta-se à vontade para clonar, modificar e adaptar como quiser.
