//lement validation method
const getElement = (selection)=>{
    const element = document.querySelector(selection)
    if(element){
        return element
    }else{
        throw new Error(`please check ${selection} selector, no such element exist`)
    }
}

export {getElement}