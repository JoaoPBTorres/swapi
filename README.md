# Projeto Star Wars API(SWAPI)

## Descrição

Aplicação construída utilizando Angular e consumo da 'Star Wars API (SWAPI)' para exibir informações sobre filmes, personagens, planetas e outros dados do universo Star Wars.
O projeto segue o padrão de Smart e Dumb Components, separando a lógica de negócios e a apresentação para facilitar a manutenção e organização do código.

## Estrutura de componentes
### Dumb Components (Burros)
- São responsáveis apenas por exibir dados recebidos via @Input();
- Disparam eventos utilizando @Output();
- Não possuem lógica complexa.
  
### Smart Components (Inteligentes)
- Buscam, processam e controlam os dados;
- São responsáveis por controlar o estado da aplicação;
- Passam dados para os Dumb Components.

Essa separação torna o código mais modular e fácil de manter.

### Exemplo de comunicação:
- Dumb Components: Apenas exibem a interface e disparam eventos;
- Smart Components: Pegam dados, processam e repassam para os Dumb Components.

## Funcionamento
- Exibição de filmes, personagens e planetas da API de Star Wars;
- Utilização de Services para fazer chamadas HTTP para a API;
- Estrutura de componentes dumb e smarts para uma separação clara de responsabilidades.

## Tecnologias Utilizadas
- Angular: Framework utilizado para o desenvolvimento da aplicação;
- SWAPI (Star Wars API): API utilizada para buscar dados sobre o universo Star Wars.

## Como rodar o projeto

1 - Clone o repositório:\
git clone https://github.com/seu-usuario/swapi.git

2 - Navegue até o diretório do projeto:\
cd swapi

3 - Instale as dependências:\
npm install

4 - Inicie o servidor de desenvolvimento:\
ng serve

5 - Acesse a aplicação em:\
http://localhost:4200

## Próximos passos
- Adicionar imagens nos cards de filmes, personagens e planetas;
- Melhorar o design e a usabilidade da interface;
- Resolver bugs;
- Adicionar novas funcionalidades.
