<script>
    import Icon from '@iconify/svelte';
    import ShowOrders from './ShowOrders.svelte';
    
    let orders = [
        {
            name: "View All Orders",
            value:"view-all-orders",
        },
        {
            name: "View Pending Orders",
            value:"view-pending-orders",
        },
        
    ]
</script>

<section >
    <h1 class="text-2xl md:text-3xl font-bold mb-5">My Order</h1>
    <h2 class="text-lg md:text-xl font-semibold my-5">Recent Orders</h2>
    <div class="w-full flex flex-col gap-5 items-center justify-center p-2">
        {#each orders as i}
        <ShowOrders {i} />
        {/each}
    </div>
    <h1 class="text-lg md:text-xl font-semibold my-5">Communication </h1>
    <h2 class="">Need Help?</h2>
    <div class="w-full flex items-center justify-center p-2">
        <button class="w-full p-3 bg-white/90 hover:bg-white flex items-center justify-between rounded">
            <div class="flex items-center gap-3">
                <div class="text-xl md:text-2xl">
                    <Icon icon="ri:customer-service-2-line" />
                </div>
                <p class="font-light">Help Center</p>
            </div>
            <div>
                <Icon icon="ep:right" />
            </div>
        </button>
    </div>

</section>
