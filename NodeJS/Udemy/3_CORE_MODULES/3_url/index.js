const url = require('url')

const adrress = 'http://www.meusite.com.br/catalogo?produtos=cadeira'

const parsedUrl = new url.URL(adrress)

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produtos'))

