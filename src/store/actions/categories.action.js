
export const SELECTED_CATEGORY = 'SELECTED_CATEGORY' 

export const selectedCategory = (catId)=>(
    {
        type:SELECTED_CATEGORY,
        categoryId:catId
    }
)