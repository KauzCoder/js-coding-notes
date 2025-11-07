# modulos/ (modules)

Propósito

Armazenar exemplos de código que mostram como dividir o projeto em múltiplos arquivos usando módulos ES6 (`export` / `import`) e, se necessário, exemplos com CommonJS (Node.js).

Como usar

- Crie pequenos módulos que exportem funções/constantes e importe-os em arquivos de teste.
- Exemplo: `utils/soma.js` -> `export function soma(a, b) { return a + b }` e `main.js` -> `import { soma } from './utils/soma.js'`.
- Para rodar ES modules no Node.js, use `node --experimental-modules` (Node v12+) ou assegure `"type": "module"` no `package.json`.

Sugestões

- Converter funções utilitárias em módulos e criar um pequeno `index.js` que demonstre o uso.
- Mostrar diferença entre módulos no browser e no Node.
