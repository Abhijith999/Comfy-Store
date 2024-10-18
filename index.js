//global imports
import './src/toggleSidebar.js'
import './src/Cart/toggleCart.js'

//specific imports
import fetchProducts from './src/fetchProducts.js'
import { store, setUpStore, findStore } from './src/store.js'
import displayProducts from './src/displayProducts.js'
import { getElement } from './src/util.js'

const init = async ()=>{
    const products = await fetchProducts()
    if(products){
        setUpStore(products)
        console.log(store)
        const featured = store.filter(item => item.featured === true)
        displayProducts(featured, getElement('.featured-center'))
    }
}

window.addEventListener('DOMContentLoaded', init)
