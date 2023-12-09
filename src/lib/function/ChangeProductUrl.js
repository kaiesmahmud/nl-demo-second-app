import { product_details, product_url } from "../store/store"

export const changeProductURL = async(id)=> {
    product_url.set(id)

    const url = "https://api.prowebmasters.nl/single_product.php?p_id="+id ;

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    const response = await fetch(url,requestOptions)
    const data = await response.json()
    
    if(data.data){
        console.log("changeProductURL DAta found !",data.data[0])
        product_details.set(data.data[0])
    }   
    
}