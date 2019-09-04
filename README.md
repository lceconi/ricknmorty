# Ricknmorty

Esta aplicação tem o objetivo de apresentar graficamente os dados do seriado Rick and Morty, a partir da utilização da API open source [The Rick and Morty API](https://rickandmortyapi.com/).

Este projeto foi desenvolvido por Laura Ceconi, utilizando [Angular CLI](https://github.com/angular/angular-cli) versão 8.2.0.

## Instruções para rodar a aplicação

1. Clonar o respositório.
2. Acessar a pasta e rodar o comando `npm install`.
3. Rodar o comando `npm start`.
4. Acessar `http://localhost:4200/` pelo navegador.

## Arquitetura e organização do projeto

Por possuir experiência com a utilização do Angular no Ionic Framework, optei por seguir a mesma arquitetura e estrutura de diretórios utilizada pelo Ionic. Isso significa que:
* Foram criados 3 diretórios dentro do diretório `app`: `pages`, `components` e `services`.
* No diretório `pages` estão armazenadas todas as páginas que pode ser acessada pela aplicação a partir do `Router`.
* No diretório `components` estão armazenados os componentes customizados que podem se reutilizados pelas `pages`.
* No diretório `services` estão as funções utilizadas para realizar as requisições AJAX para a API.

###### Navegação
A navegação da aplicação está desenvolvida utilizando o módulo `Router`. Sua configuração pode ser encontrada em `src/app/app-routing.module.ts`

###### Lazy-loading
Para cada novo Component criado, também criou-se um arquivo de tipo `module.ts`. Desta forma, cada Component pode ser tratado como um Module, sendo possível instanciá-los sob demanda, e não todos ao mesmo tempo quando é iniciada a aplicação. Esta técnica chama-se `lazy-loading`.

###### Services
As requisições AJAX feitas no arquivo `api.services.ts` estão bem genéricas, por isso não se utilizou da validação por Interfaces. Isto poderia ser uma melhoria futura do projeto.

###### Interface
Para a interface, foi utilizado o framework [Material Design for Bootstrap (MDB)](https://mdbootstrap.com/). Optei por utilizar esta biblioteca por possuir diversos componentes de interface padronizados conforme o Material Design e pela facilidade de lidar com os grids para o desenvolvimento da responsividade da aplicação. Como os módulos desta biblioteca podem ser carregados sob demanda, a aplicação mantém um bom desempenho quanto ao carregamento dos componentes.

Os estilos que precisaram ser customizados estão todos unificados no arquivo `styles.scss`. Decidi fazer desta forma pois não houveram muitas customizações para cada Component (caso contrário teria feito um arquivo `scss` para cada Component).

###### Testes

Foram desenvolvidos alguns testes unitários bem simples, que validam se está sendo instanciada a página correta. Gostaria de realizar testes dos filtros e das requisições para a API, porém eu precisaria de mais tempo para estudar formas de realizar estes testes. Também entra na lista de melhorias para o projeto.

## Aprendizados

Neste projeto pude utilizar o framework MDB, o qual nunca havia utilizado antes (experiências anteriores foram com Ionic). Gostei bastante da biblioteca por ter uma boa documentação e por ter componentes minimalistas que deixam a interface bem harmoniosa. Também gostei de utilizar a API do seriado, que também está bem documentada e é de fácil utilização.

## Possíveis melhorias

* Criar Interfaces para validar e padronizar os objetos.
* Criar mais testes.
* Remover erros 404 que aparecem no console quando realizada a pesquisa de Locais e Personagens.
* Apresentar mais dados.
