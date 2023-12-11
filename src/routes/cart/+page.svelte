<script>
	import { onMount } from 'svelte';
	import { fetchCartData } from './../../lib/function/fetchCartData.js';
	import { emptyCartData } from './../../lib/function/emptyCartData.js';
	import { myCartData } from './../../lib/store/store.js';
    import { allProductsData } from "../../lib/store/store";
    import PQuantity from '../../lib/components/P_Quantity.svelte';
    import Popup from '../../lib/components/Popup.svelte';

    onMount(()=>{
        fetchCartData();
    })
    console.log( $allProductsData)
    let total = 0,checkOutItemCount = 0, pendingOrderConfirm = []

    const increaseTotalPrice = (newItemPrice,product) =>  {
        console.log(pendingOrderConfirm)
        let addProduct = $myCartData.filter(i=> i.p_id == product.p_id)[0]
        total +=newItemPrice 
        checkOutItemCount ++
        addProduct = {
            ...addProduct,
            p_total_price:(addProduct?.p_total_price || 0) + newItemPrice ,
            p_quantity:(addProduct?.p_quantity || 0) + 1
        }
        if(pendingOrderConfirm.length == 0){
            pendingOrderConfirm.push(addProduct)
        }else{
            let index = pendingOrderConfirm.findIndex(i=> i.p_id == product.p_id)
            if(index == -1){
                pendingOrderConfirm.push(addProduct)
            }else{
                pendingOrderConfirm[index] = addProduct
            }
        }
    }
    const decreaseTotalPrice = (removeItemPrice,product) =>{
        console.log(pendingOrderConfirm)

        let addProduct = $myCartData.filter(i=> i.p_id == product.p_id)[0]

        if(total == 0 && checkOutItemCount == 0){
            alert("No items in cart")
        }else{
            total -= removeItemPrice
            checkOutItemCount --
            addProduct = {
                ...addProduct,
                p_total_price:(addProduct?.p_total_price || 0) - removeItemPrice,
                p_quantity:(addProduct?.p_quantity || 0) - 1
            }
        }
    }

    // ======PopUp=============
    let showPopup = false;

    const handlePopUp = () => {
    showPopup = true;
    };
    
</script> 
 
<section class="bg-red-100/50 ">
    <div class="flex items-center justify-between p-3">
        <p class="text-lg p-5 font-bold ">My Cart</p>
        <button on:click={handlePopUp} class="bg-red-500 px-3 py-1 md:px-5 md:py-3 rounded text-white font-bold">
            CheckOut
        </button>
    </div>
    <div class="mb-10 p-2">
        {#if $myCartData.length == 0}
             <h1>No Products Selected</h1>
        {/if}
       <div class="flex flex-col gap-3">
           {#each $myCartData as {p_id,p_name,p_url,cat_id,cat_name,p_price,p_img,p_type,p_reg_price,p_stock}}
                <div class="p-2 bg-white shadow rounded">
                   <div class="flex flex-col md:flex-row items-center justify-between gap-2">
                       <div  class="flex flex-col md:flex-row items-center gap-2">
                           <div class="w-40">
                               <img src={p_img} alt="">
                           </div>
                           <div class="text-xs md:text-sm font-nunito ">
                               <div class="flex items-center justify-between py-2">
                                   <div>
                                       <p><span class="font-bold">ID: </span>{p_id}</p>
                                       <p class=" line-through opacity-50"><span class="font-bold" >Regular Price: </span>{p_reg_price}</p>
                                       <p><span class="font-bold " >Price: </span>{p_price}</p>
                                   </div>
                                   <div>
                                   </div>
                               </div>
                               <p><span class="font-bold" >Name: </span>{p_name}</p>
                           </div>
                       </div>
                       <div class="w-[300px]">
                           <PQuantity 
                           {decreaseTotalPrice} 
                           {increaseTotalPrice } 
                           {p_price}
                           product={{p_id,p_name,p_url,cat_id,cat_name,p_price,p_img,p_type,p_reg_price,p_stock}}
                           />
                           <button on:click={()=>{emptyCartData(p_id)}} class="bg-red-500 rounded p-1 text-xs font-extrabold text-white px-3">Remove Product</button>
                       </div>
                   </div>
                </div>
           {/each}
       </div>
    </div>
    {#if showPopup}
        <Popup message="Please hold on you are being Transferred to our main webshop for an Easy Checkout." duration={2000}/>
    {/if}
</section>