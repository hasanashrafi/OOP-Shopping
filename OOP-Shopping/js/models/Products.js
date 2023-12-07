class Products {
    constructor(parent, products) {
        this.parent = parent;
        this.products = products;
        this.parent.addEventListener("click", this)
    }

    showProducts() {
        this.products.forEach(product => this.createCard(product));
    }

    createCard(data) {
        const cardEle = document.createElement("div");

        const imgEle = this.productImg(data)
        const infoEle = this.productInfo(data)

        cardEle.innerHTML = imgEle
        cardEle.innerHTML += infoEle

        this.parent.appendChild(cardEle);

    }
    productImg(data) {
        const { alt, image } = data;
        const imgJsx = `<img alt="${alt}" src="${image}"/> `


        return imgJsx
    }
    productInfo(data) {
        const { id, name, price } = data;
        const infoJsx = `
        <div id="product-info">
            <h3>${name}</h3>
        <div>
            <span>${price}</span>
            <button data-id=${id}>+</button>
        </div>
        </div>
        `
        return infoJsx
    }
    handleEvent() {
        const element = event.target;
        if (element.tagName === "BUTTON") {
            this.addToCart(element.dataset.id)
        }
    }
    addToCart(id) {
        console.log(id);
    }
}

export default Products;