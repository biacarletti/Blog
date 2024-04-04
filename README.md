# Projeto CRUD de um Blog

Este projeto consiste em uma aplicação para realizar operações CRUD (Create, Read, Update, Delete) em um banco de dados PostgreSQL. Ele foi desenvolvido utilizando Node.js com o framework Fastify e é executado em um contêiner Docker para facilitar a implantação e execução.

## Requisitos

- Docker
- Node

## Como executar
1. Clone o repositório para sua máquina local:
```bash
git clone https://github.com/biacarletti/CRUD_BLOG
cd nome-do-repositorio
````
## Baixar dependências do projeto
```bash
npm install
````

Crie um arquivo .env baseado no arquivo .env.example e configure as variáveis de ambiente conforme necessário, como a conexão com o banco de dados PostgreSQL em seu Docker.

## Baixar as dependências
```bash
"dependencies": {
    "fastify": "^4.26.2",
    "postgres": "^3.4.4"
  },
  "devDependencies": {
    "dotenv": "^16.4.5"
  }
````
## Rode o projeo 
```bash
node run migrete
node run dev
node runstart

````



