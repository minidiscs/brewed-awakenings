import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener("click", (clickEvent) => productPriceAlert(clickEvent))

const productPriceAlert = (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("product")) {
        const [,productId] = itemClicked.id.split("--")

        for (const product of products) {
            if (product.id === parseInt(productId)) {
                window.alert(`The price of a ${product.name} is $${product.price}`)
            }
        }
    }
}
