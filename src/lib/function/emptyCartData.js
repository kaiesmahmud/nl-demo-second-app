import { fetchCartData } from "./fetchCartData";

export const emptyCartData = async (id) =>{
    const url = "https://api.prowebmasters.nl/empty_cart.php?p_id="+id
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    const response = await fetch(url,requestOptions)
    const data = await response.json()
    fetchCartData()
    // if(data){
    // }
}