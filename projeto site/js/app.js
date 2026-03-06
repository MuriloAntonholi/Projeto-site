
function renderProducts(category, containerId){

const container = document.getElementById(containerId)

const filtered = products.filter(p => p.category === category)

container.innerHTML = '<div class="grid"></div>'

const grid = container.querySelector(".grid")

filtered.forEach(product=>{

grid.innerHTML += `

<div class="product-card">

<img src="img/produtos/default.jpg">

<h3>${product.name}</h3>

<p class="rating">⭐ ${product.rating}</p>

<p>R$ ${product.price}</p>

<a href="produto.html?id=${product.id}">Ver análise</a>

</div>

`

})

}

renderProducts("celulares","celulares-container")
renderProducts("notebooks","notebooks-container")