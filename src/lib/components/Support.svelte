<script>
import Icon from '@iconify/svelte';
    let data = [
        {
            name:"Free Shipping",
            icon: "la:shipping-fast",
            description: "Free Shipping with Discount",
        },
        {
            name:"Great Support 24/7",
            icon: "bx:support",
            description: "Instant Access to Contact",
        },
        {
            name:"100% Secure Payment",
            icon: "ant-design:safety-outlined",
            description: "We ensure your money is save",
        },
        {
            name:"Money-Back Gurantee",
            icon: "mynaui:box",
            description: "10 days Money Back Gurantee",
        },
    ]
</script>

<div class="flex items-center justify-center">
    <div class=" w-full lg:w-[75%] flex flex-wrap md:flex-nowrap  md:gap-5 justify-center px-5 md:px-10 ">
        {#each data as item}
             <!-- content here -->
             <div class="w-1/2 p-2 md:p-4 py-5 md:py-10 flex flex-col items-center justify-center gap-3 border-b-2 border-blue-100 hover:border-blue-500">
                <div class="bg-green-100 text-blue-600 text-2xl md:text-3xl lg:text-5xl rounded-full p-3 md:p-5">
                    <Icon icon={item.icon} />
                </div>
                <div class="p-2 text-center">
                    <p class="text-lg md:text-xl font-bold mb-5">{item.name}</p>
                    <p class="text-black/70 capitalize font-light">{item.description}</p>
                </div>
             </div>
        {/each}
    </div>
</div>