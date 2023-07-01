import { URL_API } from "../../constants/dataBase";

export const ADD_FAV_ITEM = 'ADD_FAV_ITEM'
export const REMOVE_FAV_ITEM = 'REMOVE_FAV_ITEM'

export const addFavItem = (item)=>({
    type:ADD_FAV_ITEM,
    item:item 
})

export const removeFavItem = (itemId)=>({
    type:REMOVE_FAV_ITEM,
    itemId
})