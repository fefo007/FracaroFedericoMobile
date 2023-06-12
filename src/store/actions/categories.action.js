
export const SELECTED_CATEGORY = 'SELECTED_CATEGORY' 

export const selectedCategory = (catName)=>(
    {
        type:SELECTED_CATEGORY,
        categoryName:catName
    }
)