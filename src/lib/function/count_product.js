import { myCartData } from "../store/store";

export const count_product = async (p_id, p_quantity) => {
    const url = "https://api.prowebmasters.nl/count_product.php?p_id="+p_id+"&p_quantity="+p_quantity
    
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    const response = await fetch(url,requestOptions)
    const data = await response.json()
    
    if(data.data){
        console.log("Cart DAta found !",data.data)
        myCartData.set(data.data)

        console.log("After Update", myCartData)
    }
}