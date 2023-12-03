<script>
    import Icon from '@iconify/svelte';
    import { showAllOrderLists, showPendingOrders } from '../../store/store';
    import SingleOrderItem from './SingleOrderItem.svelte';
    export let i; 

    let open = false ;
    const handleOpen = () => {
        open = !open
    }
    
</script>
    <div class="flex flex-col gap-3 w-full">
        <button on:click={handleOpen} class={`w-full p-3 bg-white flex items-center justify-between rounded  shadow`}>
            <div class="flex items-center gap-3">
                <div class="text-xl md:text-2xl text-red-500">
                    <Icon icon="fluent-mdl2:activate-orders" />
                </div>
                <p class="font-light">{i.name}</p>
            </div>
            <div>
                {#if open}
                    <Icon icon="icon-park-outline:up" />
                {:else}
                    <Icon icon="icon-park-outline:down" />
                {/if}
            </div>
        </button>
        {#if open && (i.value === "view-all-orders")}
        <div class="flex flex-col gap-3 p-1">
            {#each $showAllOrderLists as item}
            <SingleOrderItem {item} />
            {/each}
        </div>
        {/if}
        {#if open && (i.value === "view-pending-orders")}
        <div class="flex flex-col gap-3 p-1">
            {#each $showPendingOrders as item}
                <SingleOrderItem {item} />
            {/each}
        </div>
        {/if}
    </div>
