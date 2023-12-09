
export const storeCartToLocalStorage = (singleCart)=>{
  const getCart = localStorage.getItem("cart");
  let newCart
  if (getCart) {
    newCart = JSON.parse(getCart);
    newCart.push(singleCart)

    localStorage.setItem("cart", JSON.stringify(newCart));
  }else{
    newCart = [singleCart]
    const jsonString = JSON.stringify(newCart);

    localStorage.setItem("cart", jsonString);
  }

}



