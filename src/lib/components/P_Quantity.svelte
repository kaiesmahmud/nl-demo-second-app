<script>
	import { count_product } from './../function/count_product.js';
    import Icon from '@iconify/svelte';
    export let product;
    console.log("product is  ", product)
    let qty = parseInt(product.p_quantity);
    const increaseQty = ()=>{
        qty++
        count_product(product.p_id,qty )
    }
    const decreaseQty = ()=>{
        if(qty < 1){
            alert("Quantity cannot be less than 1")
        }else if(qty == 1){
            alert("Quantity cannot be less than 1")
            qty = 1
            count_product(product.p_id,qty )
        }else{
            qty--
            count_product(product.p_id,qty )

        }
    }

</script>
<div class="flex flex-col items-center gap-2 justify-between w-full ">
    <p class="font-bold ">Quantity :  {product.p_quantity} </p>
    <div class="flex gap-3 text-white py-3 font-bold">
        <button on:click={decreaseQty} class="px-3 py-1 md:px-5 bg-red-500 rounded flex items-center gap-2">
            <Icon icon="ic:baseline-minus" />
        </button>
        <!-- <p class="text-black">
            {qty}
        </p> -->
        <button on:click={increaseQty} class="px-3 py-1 md:px-5 bg-green-500 rounded text-xl flex items-center gap-2">
            <Icon icon="ic:baseline-plus" />
        </button>
    </div>

</div>