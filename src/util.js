// API URLS
const allProductsUrl = 'https://www.course-api.com/javascript-store-products'
const singleProductUrl ='https://course-api.com/javascript-store-single-product'

//element validation method
const getElement = (selection)=>{
    const element = document.querySelector(selection)
    if(element){
        return element
    }else{
        throw new Error(`please check ${selection} selector, no such element exist`)
    }
}

const setStorageItem = (name, store) =>{
    localStorage.setItem(name, JSON.stringify(store))
}
const getStorageItem = (item) =>{
    let storageItem = localStorage.getItem(item)
    if(storageItem){
        storageItem = JSON.parse(localStorage.getItem(item))
    }
    else{
        storageItem = [];
    }
    return storageItem
}

const formatPrice = (price) =>{
    const formattedPrice = new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format((price / 100).toFixed(2))
    return formattedPrice;
}

export {
allProductsUrl,
singleProductUrl,
formatPrice,
setStorageItem,
getStorageItem,
getElement}