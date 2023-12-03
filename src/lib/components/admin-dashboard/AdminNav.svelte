<script>
    import Icon from '@iconify/svelte';
	import { showAdminNavItem } from './../../store/store.js';
    export let adminNavItems 
    let showItemsName = [
        "Analytics",
        "All-Category",
        "All-Products",
        "All-Users",
        "All-Orders",
    ]

    let showBar = true
    const handleShowBar = () => {
        showBar = !showBar
    }
    const handleUpdateAdminNavItemView = (arg)=>{
        if($showAdminNavItem !== arg){
            console.log(arg);
            showAdminNavItem.set(arg)
            
        }
        showBar = false
    }
    
</script>

<section class="w-full md:w-1/3 bg-white  rounded shadow-lg p-3 md:p-5 capitalize">
    <div class="flex justify-between items-center">
        <h1 class="font-bold text-xl md:text-2xl">Admin Dashboard</h1>
        <button on:click={handleShowBar} class="text-xl md:text-2xl md:hidden p-3 rounded-full bg-black/10">
            <Icon icon="gridicons:menus" />
        </button>
        
    </div>
    {#if showBar }
    <div class=" flex md:hidden flex-col gap-3  my-5">
        {#each adminNavItems as item}
        <button on:click={()=>handleUpdateAdminNavItemView(item.value)} class={`border-l-2 hover:border-black p-3 w-full shadow bg-white flex items-center justify-between rounded `}>
            <div class="flex items-center gap-3">
                <div class="text-xl md:text-2xl">
                    <Icon icon={item.icon} />                    
                </div>
                <p class="font-light">{item.name}</p>
            </div>
            <div>
                <Icon icon="ep:right" />
            </div>
        </button>    
        {/each}
    </div>
        
    {/if}
    <div class="hidden md:flex flex-col gap-3  my-5">
        {#each adminNavItems as item}
        <button on:click={()=>handleUpdateAdminNavItemView(item.value)} class={`border-l-2 hover:border-black p-3 w-full shadow hover:shadow-md hover:bg-white flex items-center justify-between rounded ${$showAdminNavItem === item.value && " bg-white "}   ${($showAdminNavItem !== item.value) && "bg-white/50"}`}>
            <div class="flex items-center gap-3">
                <div class="text-xl md:text-2xl">
                    <Icon icon={item.icon} />                    
                </div>
                <p class="font-light text-start">{item.name}</p>
            </div>
            <div>
                <Icon icon="ep:right" />
            </div>
        </button>    
        {/each}
    </div>
</section>