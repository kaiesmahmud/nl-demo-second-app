import { allUsersData } from "../store/store";
export const fetchAllUsers = async()=>{

    const url = "https://api.prowebmasters.nl/users.php"
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    const response = await fetch(url,requestOptions)
    const data = await response.json()
    //  console.log("Fetch function data -",data.data)
    allUsersData.set(data.data);
       
}
