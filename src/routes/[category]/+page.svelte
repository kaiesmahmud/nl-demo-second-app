<script>
	import { fetchAllProductsData } from './../../lib/function/fetchAllProductsData.js';
    import Icon from '@iconify/svelte';

	import { allProductsData, filteredProducts } from './../../lib/store/store.js';
    import Filter from '../../lib/components/Filter.svelte';
    import { onMount } from 'svelte';
    onMount(()=>{
        fetchAllProductsData();
        console.log($allProductsData)
        filteredProducts.set($allProductsData)
    })
    
</script>
<div class=" mb-5 text-sm flex gap-5 flex-col items-start md:flex-row">
    <Filter />
    <!-- ==========Right Side=============== -->
    <div class="w-full md:w-3/4 rounded bg-gray-100/30 p-3 md:p-5 grid grid-cols-2 lg:grid-cols-3">
        {#if $filteredProducts.length < 1}
             <p>No Products found Using Filter</p>
        {:else}
            {#each $filteredProducts as {p_id,p_name,p_url,cat_id,cat_name,p_price,p_img,p_type,p_reg_price,p_stock}}
                <a href={`/${cat_name}/${p_id}`} class="shadow-lg bg-white m-3 md:m-5 rounded-2xl overflow-hidden group flex flex-col justify-between">
                    <div class="relative w-full ">
                        <div class=" relative object-center aspect-square overflow-hidden rounded flex items-center justify-center bg-white p-1">
                            <img src={p_img} alt={p_name} class=" group-hover:scale-110 rounded hover:scale-110 transition-all ease-in">
                            <div class=" absolute w-full h-full top-0 left-0  z-40 transition-all ease-in-out overflow-hidden">
                            <div class="flex justify-end">
                                <div class="p-2  rounded-full m-1 hover:text-red-500 bg-red-100 transition-all ease-in">
                                <Icon icon="ph:heart" />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-sm p-2 font-semibold">
                        {p_name.substring(0,35)}...  
                    </div>
                    <div class="rounded-[25px] p-1 md:p-2 px-3 text-xs md:text-sm font-bold text-center">
                    <span class=" line-through text-red-500 text-sm font-extralight">${p_reg_price}</span> 
                    ${p_price}
                    </div>
                    <div class="p-1 md:p-2 px-2 md:px-3 text-xs font-light text-center bg-yellow-500/10">{p_type}</div>
                </a>
            {/each}
        {/if}
    </div>
</div>
