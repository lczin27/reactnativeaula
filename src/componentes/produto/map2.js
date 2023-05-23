const carrinho = [
    '{"name": "borracha", "preco": 3.45}',
    '{"name": "Caderno", "preco": 13.00}',
    '{"name": "Kit de LAPIS", "preco": 42.00}',
    '{"name": "Caneta", "preco": 7.50}'

]

// retorna um array apenas com preço

const paraObjetos= json => JSON.parse(json)
const apenasPrecos = produto => produto.preco

const resultado2 = carrinho.map(paraObjetos)
const resultado = carrinho.map(paraObjetos).map(apenasPrecos)
console.log(resultado)
console.log(resultado2)