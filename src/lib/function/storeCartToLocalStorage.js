
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

export const redirectToMainCart =()=>{
  const getCart = localStorage.getItem("cart");
  const host = `http://localhost:5174/cart?data="${getCart}"`
  if(getCart){
    console.log(getCart)
    console.log("url should be - ", host)
    // location.href = "https://www.google.com"
  }
}

