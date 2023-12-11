import { myCartData } from "../store/store";

export const addToCart = async( cat_id, cat_name,p_id,p_img,p_name,p_price,p_reg_price,p_type,p_url) => {
    const url = "https://api.prowebmasters.nl/add_to_cart.php?cat_id="+cat_id+"&cat_name="+cat_name+"&p_id="+p_id+"&p_name="+p_name+"&p_img="+p_img+"&p_url="+p_url+"&p_type="+p_type+"&p_price="+p_price+"&p_reg_price="+p_reg_price

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