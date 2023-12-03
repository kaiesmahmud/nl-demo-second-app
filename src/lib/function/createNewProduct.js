import { allProductsData } from "../store/store";

export const createNewProduct = async(productDetail)=>{
    const {p_id,p_name,p_url,cat_id,cat_name,p_price,p_img,p_type,p_reg_price,p_stock} = productDetail
    const url = `https://api.prowebmasters.nl/create_product.php?p_id=${p_id}&p_name=${p_name}&p_url=${p_url}&p_price=${p_price}&p_reg_price=${p_reg_price}&p_stock=${p_stock}&p_img=${p_img}&p_type=${p_type}&cat_id=${cat_id}&cat_name=${cat_name}`

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    const response = await fetch(url,requestOptions)
    const data = await response.json()
    console.log(data.message)
    if(data.data){
        allProductsData.set(data.data);
        return true
    }
}