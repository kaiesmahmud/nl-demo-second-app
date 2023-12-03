<script>
    import { allProductsData, product_url ,myCartData} from "../../../lib/store/store";
    
    const product = $allProductsData.filter(p=> p.p_url == $product_url)[0];
    console.log(product)
    const {p_id,p_name,p_url,cat_id,cat_name,p_price,p_img,p_type,p_reg_price,p_stock} = product;
    $: matched = $myCartData.filter(i=> i.p_url == p_url)[0]

    const handleAddtoCart = ()=> {
        console.log("Result of Match - ", matched)
        if(matched){
            alert("Product already added to cart")
            return
        }else{
            myCartData.update(cart=> [...cart,product])
            console.log("Cart Updated-", $myCartData)
        }
    }
</script>

<!-- Page for product {$product_url} -->
<section class="flex items-center justify-center my-5">
    <div class="w-full  p-2 rounded  flex flex-col md:flex-row gap-5 justify-center ">
        <div class="w-full md:w-1/2 overflow-hidden rounded">
            <img class="w-full hover:scale-110 transition-all ease-in-out" src={p_img} alt={p_name}>
        </div>
        <div class="w-full md:w-1/2 p-3 py-5 md:py-10 font-sans text-sm flex gap-3 flex-col justify-between">
            <h1 class="text-xl font-semibold">{p_name}</h1>
            <p class="font-semibold">Regular Price: <span class=" text-xl line-through font-medium">${p_reg_price}</span></p>
            <p class="font-semibold">Offer Price: <span class="text-xl text-green-500">${p_price}</span></p>
            <p class="font-semibold">Type: {p_type}</p>
            <p >Category: {cat_name}</p>
            <div>
                <p class="font-semibold">Description:</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga illum perspiciatis harum, mollitia quae animi, nobis sit asperiores repellat dolorum aliquid suscipit aperiam velit nam similique temporibus odit ullam magnam?</p>
            </div>
            {#if matched}
                 <!-- content here -->
                 <button disabled class="bg-red-500 p-5 font-bold text-white rounded ">Product Already Added</button>
            {:else}
                 <button on:click={handleAddtoCart} class="bg-red-500 p-5 font-bold text-white rounded hover:bg-red-600">In my Shopping Cart</button>
            {/if}
        </div>
    </div>
</section>