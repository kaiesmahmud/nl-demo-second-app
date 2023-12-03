<script>
    import Icon from '@iconify/svelte';
    let navItems = [
        {
            name:"Men's Collection", url:"/men-collection"
        },
        {
            name:"Women's Collection",url:"/women-collection"
        },
        {
            name:"Custom Jewelry",url:"/custom-jewelry"
        },
        {
            name:"Special Offer",url:"/special-offer"
        },
    ]
</script>

<div>
    <h1 class="font-bold text-xl md:text-2xl ">All Category</h1>
    <div class="p-5 flex flex-col gap-5">
        <div>
            <!-- <h3>Add Catagory</h3> -->
            <div class="pb-3 border-b-2 flex gap-3 w-full ">
                <input class="bg-slate-100 p-3  rounded w-full" type="text" placeholder="Add Category"/>
                <div class="flex gap-3 text-white">
                    <button class="px-3 py-1 md:px-5 bg-red-500 rounded">
                        <Icon icon="maki:cross" />
                    </button>
                    <button class="px-3 py-1 md:px-5 bg-green-500 rounded text-xl flex items-center gap-3">
                        <Icon icon="carbon:add-filled" />
                        <p class="text-sm font-bold">Add</p>
                    </button>
                </div>
            </div>
        </div>
        {#each navItems as i}
        <div class="flex items-center justify-between w-full bg-white p-3  rounded shadow">
            <div>
                {i.name}
            </div>
            <a href={i.url} class="hover:font-bold">
                {i.url}
            </a>
            <div class="flex gap-3 text-white">
                <button class="px-3 py-1 md:px-4 bg-red-500 rounded flex items-center gap-2">
                    <Icon icon="maki:cross" />
                    <p class="text-xs md:text-sm font-semibold">Delete</p>
                </button>
                <button class="px-3 py-1 md:px-4 bg-green-500 rounded text-xl flex items-center gap-2">
                    <Icon icon="carbon:edit" />
                    <p class="text-xs md:text-sm font-semibold">Update</p>
                </button>
            </div>
        </div>

        {/each}
    </div>
</div> 

<style>
    input{
        border:none !important;
        
    }
    input:focus-visible,input:focus, input:focus-within  {
        border:none !important;

    }
</style>