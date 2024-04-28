

## Instruções para a correção do teste

Após clonar o repositório, o primeiro passo é:
Configurar o arquivo .env.local na pasta root do projeto

```bash
NEXT_PUBLIC_LINK_BASE_URL: "http://localhost:3333/"
```

Depois disso, instale todos os pacotes utilizando pnpm como gerenciador de pacotes para não dar conflito com o pnpmlock

```bash
pnpm install
ou
pnpm i
```
Caso não tenha o gerenciador de pacotes pnpm na máquina, instale utilizando:

```bash
npm install -g pnpm
ou
npm install -g @pnpm/exe
```
Após isso, rode o projeto em desenvolvimento
```bash
pnpm dev
```

projeto irá iniciar em localhost:3000
