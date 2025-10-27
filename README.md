# Galaxy Starter

Pequeno projeto tutorial que reúne conceitos fundamentais do ecossistema JavaScript moderno: **ES Modules**, **npm scripts**, **Babel**, **Webpack**, **webpack-dev-server**, **CSS moderno** e uma simples interface interativa.

### Objetivo

Criar um projeto mínimo que:

- demonstre uso de módulos (`import` / `export`);
- mostre transpilação com Babel;
- empacote com Webpack e sirva com webpack-dev-server;
- ofereça interface HTML/CSS/JS minimalista;
- explique passo-a-passo para que outros possam aprender.

### Estrutura

```
galaxy-starter/
├─ src/
│ ├─ index.html
│ ├─ index.js
│ ├─ styles/main.css
│ └─ utils/battle.js
├─ dist/ (gerado)
├─ webpack.config.cjs
├─ .babelrc
├─ package.json
└─ README.md
```

### Instruções rápidas

1. Instale dependências:

```bash
npm install
```

2. Rodar em modo desenvolvimento (com live-reload):

```bash
npm run dev
```

3. Fazer build de produção:

```bash
npm run build
```

4. (Opcional) Visualizar dist com servidor estático:

```bash
npm run preview
```

# Tecnologias usadas

- **JavaScript** (ES6+ / ES Modules)
- **Babel** (transpiler)
- **Webpack** (bundler)
- **HTML / CSS** (design minimalista moderno)
- **dayjs** (formatação de data)
- **LocalStorage** (para salvar logs no browser)

# Conceitos abordados

- **npm e package.json** (scripts e dependências)
- **Módulos:** ES Modules (import/export)
- **Babel:** preset-env para compatibilidade
- **Webpack:** loaders (babel-loader, css-loader), plugins (HtmlWebpackPlugin, MiniCssExtractPlugin)
- **webpack-dev-server:** ambiente de desenvolvimento com HMR
- **Boas práticas:** separar `src/` e `dist/`, usar `.gitignore`, ter README detalhado

# Como contribuir

1. Fork o repositório
2. Crie uma branch `feature/minha-mudanca`
3. Faça commits claros
4. Abra um pull request

## Licença

Este projeto está licenciado sob a [Licença MIT](./LICENSE).
