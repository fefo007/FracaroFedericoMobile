import { URL_API } from "../../constants/dataBase"
export const SELECTED_PRODUCTS = 'SELECTED_PRODUCTS'
export const FILTERED_PRODUCT = 'FILTERED_PRODUCT'
export const POST_PRODUCTS = 'POST_PRODUCTS'
export const GET_PRODUCTS = 'GET_PRODUCTS'

export const selectedProduct = (prodId)=>(
    {
        type:SELECTED_PRODUCTS,
        productId:prodId
    }
)

export const filteredProducts = (catName)=>(
    {
        type:FILTERED_PRODUCT,
        categoryName:catName
    }
)

export const postProducts = (products)=>{
    console.log(products)
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/productos.json`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(
                    {
                    prods:{...products}
                    }
                ),
            })
            const result = await response.json()
            console.log(result)
            dispatch({
                type:POST_PRODUCTS,
                confirm:true
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getProducts = ()=>{
    return async dispatch => {
        try {
            const respornse = await fetch(`${URL_API}/productos.json`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const result = await respornse.json()
            const products = Object.keys(result).map(key=>({
                ...result[key],
            }))
            dispatch({
                type:GET_PRODUCTS,
                payload:products[0].prods
            })
        } catch (error) {
            console.log(error)
        }
    }
}