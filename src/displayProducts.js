

const display = (products, element) =>{
    element.innerHTML = products.map((product)=>{
        const {id, name, image, price} = product;
        return `<article class="product" data-id=${id}>
        <div class="product-container">
            <img src=${image.url} alt="" class="product-img img">
            <div class="product-icons">
                <a href="product.html?id=1" class="product-icon">
                    <i class="fas fa-search"></i>
                </a>
                <button class="product-cart-btn product-icon">
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
        </div>
        <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">$${price}</h4>
        </footer>
    </article>`
    }).join('')
}
export default display