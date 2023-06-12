export const SELECTED_PRODUCTS = 'SELECTED_PRODUCTS'
export const FILTERED_PRODUCT = 'FILTERED_PRODUCT'

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