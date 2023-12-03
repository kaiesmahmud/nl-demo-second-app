<script>
    import Icon from '@iconify/svelte';
    export let p_price;
    export let increaseTotalPrice;
    export let decreaseTotalPrice;
    export let product;
    console.log("product is  ", product)
    let qty = 0;
    const increaseQty = ()=>{
        qty++
        increaseTotalPrice(parseInt(p_price),product)
    }
    const decreaseQty = ()=>{
        if(qty < 0){
            alert("Quantity cannot be less than 0")
        }else if(qty == 0){
            alert("Quantity cannot be less than 0")
            qty = 0
            // decreaseTotalPrice(parseInt(p_price),qty)
        }else{
            decreaseTotalPrice(parseInt(p_price),product)
            qty--
        }
    }
</script>
<div class="flex  items-center gap-2 justify-between w-full ">
    <p class="font-bold ">Quantity : {qty} </p>
    <div class="flex gap-3 text-white py-3 font-bold">
        <button on:click={decreaseQty} class="px-3 py-1 md:px-5 bg-red-500 rounded flex items-center gap-2">
            <Icon icon="ic:baseline-minus" />
        </button>
        <p class="text-black">
            <!-- {qty} -->
        </p>
        <button on:click={increaseQty} class="px-3 py-1 md:px-5 bg-green-500 rounded text-xl flex items-center gap-2">
            <Icon icon="ic:baseline-plus" />
        </button>
    </div>

</div>