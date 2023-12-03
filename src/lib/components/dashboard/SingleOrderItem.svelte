<script>
    export let item
</script>
<div class="flex flex-col md:flex-row justify-between gap-1 bg-white p-2 shadow-lg">
    <div class="flex flex-col md:flex-row gap-1">
        <div class="w-20 rounded overflow-hidden">
            <img class="w-full" src={item.img} alt="">
        </div>
        <div class="flex flex-col justify-center pl-3">
            <p class="font-semibold text-lg">{item.name}</p>
            <div class="flex items-center gap-5">
                <p class="font-bold font-nunito text-red-500">${item.price}</p>
                <p class="text-xs">{item.type}</p>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-1 justify-center px-3 text-center">
        <div class={`px-2 py-1 rounded uppercase text-xs font-bold  ${item.status === "delivered" && 'bg-green-500'}  ${item.status !== "delivered" && 'bg-red-500'}`}>
            {item.status}
        </div>
        <a href={item.url} class="px-2 py-1 rounded uppercase text-xs font-bold ">View Details</a>
    </div>

</div>