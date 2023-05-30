export const SELECTED_PRODUCTS = 'SELECTED_PRODUCT'
export const FILTERED_PRODUCT = 'FILTERED_PRODUCT'

export const selectedProduct = (prodId)=>(
    {
        types:SELECTED_PRODUCTS,
        productId:prodId
    }
)

export const filteredProducts = (catId)=>(
    {
        types:FILTERED_PRODUCT,
        categoryId:catId
    }
)