<script>
	import { allProductsData } from './../../store/store.js';
    import Icon from '@iconify/svelte';
    import AdminProductCard from './all_products_cmpnt/AdminProductCard.svelte';
    console.log($allProductsData)
    
    let searchValue = ""
    let showSearchResult = false ;
    const handleShowSearchResult = () => showSearchResult = !showSearchResult 
    let result
    const searchProducts = ()=>{
        if(searchValue.length > 3){
            showSearchResult = true
            result = $allProductsData.filter(i => i.p_name.toLowerCase().includes(searchValue.toLowerCase()))
            console.log("Got Result - ",result)
        }
    }

</script>

<div>
    <div class="flex items-center justify-between py-2">
        <h1 class="font-bold text-xl md:text-2xl ">All Products</h1>
    </div>
    <div class="pb-3 border-b-2 flex gap-3 w-full ">
        <input bind:value={searchValue} class="bg-slate-100 p-3  rounded w-full" type="text" placeholder="Search Product"/>
        <div class="flex gap-3 text-white">
            <button on:click={searchProducts} class="px-3 py-1 md:px-5 bg-green-500 rounded text-xl flex items-center gap-3">
                <Icon icon="ic:baseline-search" />
                <p class="text-sm font-bold">Search</p>
            </button>
        </div>
    </div>
    {#if showSearchResult && result.length > 0}
    <div class="my-5 mb-10 border-b border-slate-900 pb-5">
        <div class="w-full flex items-center justify-end">
            <button class="p-2 text-sm font-semibold rounded bg-red-200">Clear Search Result</button>
        </div>
        <div class="flex flex-col gap-3 bg-red-100/10">
            {#each result as {p_id,p_name,p_url,cat_id,cat_name,p_price,p_img,p_type,p_reg_price,p_stock}}
                 <!-- content here -->
                 <div class="p-2 border border-gray-100 shadow bg-white">
                    <div class="flex flex-col md:flex-row items-center gap-2">
                        <div class="w-40">
                            <img src={p_img} alt="">
                        </div>
                        <div class="text-xs md:text-sm font-nunito ">
                            <div class="flex items-center justify-between py-2">
                                <div>
                                    <p><span class="font-bold">ID: </span>{p_id}</p>
                                    <p><span class="font-bold">Stock: </span>{p_stock}</p>
                                </div>
                                <div>
                                    <p><span class="font-bold" >Price: </span>{p_price}</p>
                                    <p><span class="font-bold" >Regular Price: </span>{p_reg_price}</p>
                                </div>
    
                            </div>
                            <p><span class="font-bold" >Name: </span>{p_name}</p>
                            <p><span class="font-bold" >Category: </span>{cat_name}</p>
    
                            <p class="py-2"><span class="font-bold" >URL: </span>{cat_id}/{p_url}</p>
                        </div>
                    </div>
                    <div class="flex gap-1 md:gap-3 text-white py-3 capitalize">
                        <button class="px-3 py-1 md:px-5 bg-red-500 rounded flex items-center gap-2 ">
                            <Icon icon="material-symbols-light:delete-outline" />
                            <p class="text-sm">Delete</p>
                        </button>
                        <button class="px-3 py-1 md:px-5 bg-slate-500 rounded text-xl flex items-center gap-2 capitalize ">
                            <Icon icon="carbon:edit" />
                            <p class="text-sm">update</p>
                        </button>
                        <button class="px-3 py-1 md:px-5 bg-teal-500 rounded text-xl flex items-center gap-2 capitalize">
                            <!-- <Icon icon="carbon:edit" /> -->
                            <p class="text-sm">Meta Data</p>
                        </button>
                    </div>
                 </div>
            {/each}
        </div>
        <div class="w-full flex items-center justify-center">
            <button class="p-2 text-sm font-semibold rounded bg-red-200">Clear Search Result</button>
        </div>
    </div>
    {/if}
    <div class="flex flex-col gap-3 my-2">
        {#each $allProductsData as {p_id,p_name,p_url,cat_id,cat_name,p_price,p_img,p_type,p_reg_price,p_stock}}
             <AdminProductCard 
             {p_id} {p_name} {p_url} {cat_id} {cat_name} 
             {p_price} {p_img} {p_type} {p_reg_price} {p_stock} />
        {/each}
    </div>
</div> 