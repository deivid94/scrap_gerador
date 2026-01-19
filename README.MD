# Projeto de Scraping de Dados do Gerador

Este é um projeto de scraping de dados do gerador usando Node.js, Playwright, Docker e outras tecnologias.

## Tecnologias usadas

- Node.js
- Playwright
- Docker
- ESLint
- Prettier

## Como instalar as dependências

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [https://nodejs.org](https://nodejs.org).
2. Clone este repositório para o seu ambiente local.
3. Navegue até a raiz do projeto e execute o seguinte comando para instalar as dependências:

```npm install ```

4. Certifique-se de que o Docker esteja instalado em sua máquina. Você pode baixá-lo em [https://www.docker.com](https://www.docker.com).
5. Execute o seguinte comando para construir a imagem Docker:

.```docker build -t scraping-gerador .```

6. Inicie o contêiner Docker com a imagem construída:

```docker run -d -p 3333:3333 scraping-gerador```


## Como rodar o projeto modo dev

1. Após instalar as dependências e iniciar o contêiner Docker, você pode rodar o projeto executando o seguinte comando:
```npm run dev```


2. O servidor estará rodando na porta 3333. Você pode acessá-lo em [http://localhost:3333](http://localhost:3333).

## Contribuição

Se você quiser contribuir para este projeto, sinta-se à vontade para fazer um fork do repositório e enviar um pull request com suas alterações.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.


# Estrutura de pastas do projeto

├── .github
│   └── workflows
│       └── update-readme.yml
├── .husky
│   └── pre-commit
├── Dockerfile
├── package.json
├── playwright.config.js
├── src
│   ├── app.js
│   ├── FetchInfoGerador.js
│   └── FetchStatusGerador.js
├── .eslint.config.js
├── .prettierrc
├── .vscode
│   └── launch.json
└── tests
    └── example.spec.js