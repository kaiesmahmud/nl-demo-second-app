import { allProductsData } from "../store/store";

export const fetchAllProductsData = async () =>{
    const url = "https://api.prowebmasters.nl/all_products.php"
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    const response = await fetch(url,requestOptions)
    const data = await response.json()
    //  console.log(data.data)
    allProductsData.set(data.data);
       
}