<script>
	import { fetchCartData } from './../../../lib/function/fetchCardData.js';
	import { onMount } from 'svelte';
	import { addToCart } from './../../../lib/function/addToCart.js';
    import { myCartData, product_details} from "../../../lib/store/store";
    
    onMount(()=>{
        fetchCartData()
    })
    $: matched = $myCartData.filter(i=> i.p_id == $product_details.p_id)[0]
    console.log("Result of Match - ", matched)

    const handleAddtoCart = ()=> {
        if(matched ){
            alert("Product already added to cart")
            return
        }else{
            addToCart( $product_details.cat_id, $product_details.cat_name,$product_details.p_id,$product_details.p_img,$product_details.p_name,$product_details.p_price,$product_details.p_reg_price,$product_details.p_stock,$product_details.p_type,$product_details.p_url)
        }
    }
</script>

<section class="flex items-center justify-center my-5">
    <div class="w-full  p-2 rounded  flex flex-col md:flex-row gap-5 justify-center ">
        <div class="w-full md:w-1/2 overflow-hidden rounded">
            <img class="w-full hover:scale-110 transition-all ease-in-out" src={$product_details.p_img} alt={$product_details.p_name}>
        </div>
        <div class="w-full md:w-1/2 p-3 py-5 md:py-10 font-sans text-sm flex gap-3 flex-col justify-between">
            <h1 class="text-xl font-semibold">{$product_details.p_name}</h1>
            <p class="font-semibold">Regular Price: <span class=" text-xl line-through font-medium">${$product_details.p_reg_price}</span></p>
            <p class="font-semibold">Offer Price: <span class="text-xl text-green-500">${$product_details.p_price}</span></p>
            <p class="font-semibold">Type: {$product_details.p_type}</p>
            <p >Category: {$product_details.cat_name}</p>
            <div>
                <p class="font-semibold">Description:</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga illum perspiciatis harum, mollitia quae animi, nobis sit asperiores repellat dolorum aliquid suscipit aperiam velit nam similique temporibus odit ullam magnam?</p>
            </div>
            {#if matched}
                <button disabled class="bg-slate-500 p-5 font-bold text-white rounded ">
                <a href="https://traxnyc-demo-main.vercel.app/cart">Product Already Added</a>
                </button>
            {:else}
                 <button on:click={handleAddtoCart} class="bg-blue-500 p-5 font-bold text-white rounded hover:bg-blue-600">In my Shopping Cart</button>
            {/if}
        </div>
    </div>
</section>