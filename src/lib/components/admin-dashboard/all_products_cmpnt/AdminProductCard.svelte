<script>
	import { fetchAfterDeleteProduct } from './../../../function/fetchAfterDeleteProduct.js';
    import Icon from '@iconify/svelte';
    import AdminUpdateProduct from './AdminUpdateProduct.svelte';

    export let p_id,p_name,p_url,cat_id,cat_name,p_price,p_img,p_type,p_reg_price,p_stock

    // -----------Delete Section Functionalities-------------
    let showDelete = false
    const handleShowDelete = ()=>{
        showDelete = !showDelete
    }
    const handleDelete = ()=>{
        showDelete = !showDelete
    }
    
    // ---------------Update Section Functionalities------------
    let showUpdate =false 
    const handleShowUpdate = ()=> showUpdate = !showUpdate

    const finalDelete = async() =>{
        
        await fetchAfterDeleteProduct(p_id)

        showDelete = false
    }
</script>

<div class=" relative  bg-gray-100/50 shadow rounded overflow-hidden">
    <div class="p-2">
        <div class="flex flex-col md:flex-row items-center gap-2">
            <div class="w-40">
                <img src={p_img} alt="">
            </div>
            <div class="text-xs md:text-sm font-nunito w-full">
                <div class="flex items-center justify-between py-2">
                    <div>
                        <p><span class="font-bold">ID: </span>{p_id}</p>
                        <p><span class="font-bold">Stock: </span>{p_stock}</p>
                    </div>
                    <div>
                        <p><span class="font-bold" >Price: </span><span class="text-lg font-bold text-red-500">{p_price}</span></p>
                        <p><span class="font-bold" >Regular Price: </span > <span class="text-md line-through">{p_reg_price}</span></p>
                    </div>
    
                </div>
                <p class="text-lg"><span class="font-bold" >Name: </span>{p_name}</p>
                <p><span class="font-bold" >Category: </span>{cat_name}</p>
                <p><span class="font-bold" >Type: </span>{p_type}</p>
    
                <p class="py-2"><span class="font-bold" >URL: </span>{cat_id}/{p_url}</p>
            </div>
        </div>
        <div class="flex gap-1 md:gap-3 text-white py-3 capitalize">
            <button on:click={handleDelete} class="px-3 py-1 md:px-5 bg-red-500 rounded flex items-center gap-2 ">
                <Icon icon="material-symbols-light:delete-outline" />
                <p class="text-sm">Delete</p>
            </button>
            <button on:click={handleShowUpdate} class="px-3 py-1 md:px-5 bg-slate-500 rounded text-xl flex items-center gap-2 capitalize ">
                <Icon icon="carbon:edit" />
                <p class="text-sm">update</p>
            </button>
            <button class="px-3 py-1 md:px-5 bg-teal-500 rounded text-xl flex items-center gap-2 capitalize">
                <!-- <Icon icon="carbon:edit" /> -->
                <p class="text-sm">Meta Data</p>
            </button>
        </div>

    </div>
    <!-- ===========Inline Delete Interface=========== -->
    {#if showDelete}
    <div class=" absolute w-full h-full top-0 bg-black/80 flex flex-col items-center justify-center gap-2 text-sm text-white font-bold">
        <p >Confirm Delete?</p>
        <div class="flex items-center justify-center gap-5">
            <button on:click={handleDelete} class="p-2 py-1 bg-green-500 rounded">no</button>
            <button on:click={finalDelete} class="p-2 py-1 bg-red-500 rounded" >Yes</button>
        </div>
    </div>
    {/if}

    <!-- =============Update Product Interface================= -->
    {#if showUpdate}
    <AdminUpdateProduct 
        {p_id} {p_name} {p_url} {cat_id} {cat_name} 
        {p_price} {p_img} {p_type} {p_reg_price} {p_stock}
        {handleShowUpdate}
              />
    {/if}
 </div>