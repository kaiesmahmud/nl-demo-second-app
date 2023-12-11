import { myCartData } from "../store/store";

export const fetchCartData = async ()=>{
    const url = "https://api.prowebmasters.nl/view_cart.php"
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
    }else{
        myCartData.set([])
    }
}