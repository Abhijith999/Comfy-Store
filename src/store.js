import { setStorageItem, getStorageItem } from "./util.js";


let store = getStorageItem('store');
const setUpStore = (products) =>{
    store = products.map((product)=>{
        const {id, fields:{featured, name, colors, company, price, image:img}} = product;
        const image = img[0].thumbnails.large;
        return {id, featured, name, colors, company, price, image}
    })
    setStorageItem('store', store)
}
const findStore = () =>{}

export {store, setUpStore, findStore}