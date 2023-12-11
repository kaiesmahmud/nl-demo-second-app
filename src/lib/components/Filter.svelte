<script>
    import Icon from '@iconify/svelte';
    import { allProductsData, filteredProducts } from '../store/store';
    
    let jwlry = [
        "All Category","men-collection","women-collection","special-offer", "custom-jewelry", 
    ]
    let pRanges = [
        "all ranges","$1-$300","$301-$500","$501-$1000","$1001-$1500","$15001-$2000",
    ]
    let showFilter = false ;
    const handleShowFilter = ()=>{
        showFilter = !showFilter
    }
    let showCategory = "All Category"
    let f_data = $allProductsData
    const handleChangeCategory = (value)=>{
        showCategory = value
        switch (showCategory) {
            case "All Category":
                filteredProducts.set($allProductsData)
                break;
            case "men-collection":
                console.log("men-collection")
                f_data = $allProductsData.filter(i=> i.cat_name === "men-collection")
                filteredProducts.set(f_data)
                console.log("men-collection", filteredProducts)
                break;
            case "women-collection":
                f_data = $allProductsData.filter(i=> i.cat_name === "women-collection")
                filteredProducts.set(f_data)
                console.log("women-collection", filteredProducts)
                break;
            case "special-offer":
                f_data = $allProductsData.filter(i=> i.cat_name === "special-offer")
                filteredProducts.set(f_data)
                console.log("women-collection", filteredProducts)
                break;
            case "custom-jewelry":
                console.log("custom-jewelry")
                f_data = $allProductsData.filter(i=> i.cat_name === "custom")
                filteredProducts.set(f_data)
                console.log("women-collection", filteredProducts)
                break;
            default:
                break;
        }
    }

    let showPriceRange = "all ranges"
    const handleChangePRange = (value)=>{
        showPriceRange = value
        switch (showPriceRange) {
            case "all ranges":
                console.log("all ranges")
                // filteredProducts.set(filteredProducts)
                break;
            case "$1-$300":
                console.log(f_data)
                // f_data = f_data.filter((item)=> {
                //     console.log(typeof(item.p_price))
                //     const p = parseInt(item.p_price);
                //     if (!Number.isNaN(p)) {
                //         // Filter based on the price range
                //         if (1 < p && p < 300) {
                //         console.log("found - ", p);
                //         return true; // Include the item in the filtered data
                //         }
                //     }
                //     console.log("Not a number")
                //     return false; // Exclude the item from the filtered data
                // })
                // console.log(f_data)
                
                break;
            case "$301-$500":
                console.log("$301-$500")
                break;
            case "$501-$1000":
                console.log("$501-$1000")
                break;
            case "$1001-$1500":
                console.log("$1001-$1500")
                break;
            case "$15001-$2000":
                console.log("$15001-$2000")
                break;
        
            default:
                break;
        }
    }


</script>

<div class={`w-auto ${ showFilter && ' w-full md:w-1/4' } rounded  p-3 md:p-5 text-xs md:text-sm`}>
    <div class={`flex items-center gap-4 justify-between ${showFilter && 'border-b border-red-500'}`}>
        {#if showFilter}
        <h1 class="text-lg font-semibold p-3">Filter</h1>
        {/if}
        <button on:click={handleShowFilter} class="text-xl font-semibold p-2 rounded-full  hover:shadow-lg">
            <Icon icon="lets-icons:filter" />
        </button>
    </div>
    {#if showFilter}
    <p class="text-md font-semibold p-3">Category</p>
    <div class="flex flex-col gap-3">
        {#each jwlry as i}
            <button on:click={()=>{handleChangeCategory(i)}} class=" text-start flex gap-2 items-center select-none border-b p-3 capitalize">
                <div class="text-lg text-red-500">
                    {#if showCategory === i}
                    <Icon icon="teenyicons:tick-circle-solid" />
                    {:else}
                    <Icon icon="teenyicons:tick-circle-outline" />
                    {/if}
                </div>
                <p class="text-xs md:text-sm" >{i}</p>
            </button>
        {/each}
    </div>
    <p class="text-md font-semibold p-3">Price Ranges</p>
    <div class="flex flex-col gap-3">
        {#each pRanges as i}
            <button on:click={()=>{handleChangePRange(i)}} class=" text-start flex gap-2 items-center select-none border-b p-3 capitalize">
                <div class="text-lg text-red-500">
                    {#if showPriceRange === i}
                    <Icon icon="teenyicons:tick-circle-solid" />
                    {:else}
                    <Icon icon="teenyicons:tick-circle-outline" />
                    {/if}
                </div>
                <p class="text-xs md:text-sm" >{i}</p>
            </button>
        {/each}
    </div>
    {/if}
</div>