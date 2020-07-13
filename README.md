# Projeto Markdown Links
Esta biblioteca faz a leitura de diretórios e analisa arquivos em formato Markdown (.md) para verificar se contém links. É possível também verificar se os links são válidos, verificar o total de links, total de links únicos e total de links quebrados.

# Instalação
`$ npm install milaroque/SAP004-md-links` ou `$ npm install markdown-links-lib`

# Utilização
Esta biblioteca pode ser executada no terminal da seguinte maneira:

`md-links <path-to-file> [options]`

Exemplo do comando a ser executado no terminal:
`
Exemplo de retorno válido:
```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link de algo
./some/example.md https://outra-coisa-.net/algum-doc.html algum doc
./some/example.md http://google.com/ Google
```

#### Options

##### --validate
Se passamos a opção --validate, a biblioteca faz uma requisição HTTP para verificar se o link funciona ou não. S

Exemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ OK 200 Link de algo
./some/example.md https://outra-coisa-.net/algum-doc.html FAIL 404 algum doc
./some/example.md http://google.com/ OK 301 Google
```

Vemos que o output neste caso inclui a palavra ok e fail depois da URL, assim como o status da resposta recebida à requisição HTTP feita pela URL.

##### --stats
Se passamos a opção --stats o output (saída) será um texto com estatísticas básicas sobre os links.

$ md-links ./some/example.md --stats
Total: 3
Unique: 3
Broken: 1

Também podemos combinar --stats e --validate para obter estatísticas que necessitem dos resultados da validação.

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ OK 200 Link de algo
./some/example.md https://outra-coisa-.net/algum-doc.html FAIL 404 algum doc
./some/example.md http://google.com/ OK 301 Google
Total: 3
Unique: 3
Broken: 1
```

# Dependências

Neste projeto foram utilizadas as seguintes bibliotecas e programas:

* [Chalk](https://www.npmjs.com/package/chalk)
* [Node.js](https://nodejs.org/en/)
* [Axios](https://www.npmjs.com/package/axios)

Projeto desenvolvido por [Camila Roque](https://github.com/milaroque)