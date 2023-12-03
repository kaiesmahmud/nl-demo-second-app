<script>
    let data = [
        {title:"Best Golden Rings" , img:"/lux-1.png",color: "bg-yellow-100"},
        {title:"Best Silver Rings" , img:"/lux-2.png",color: "bg-gray-100"},
        {title:"Best Diamond Rings" , img:"/lux-3.png",color: "bg-gray-100"},
    ]

</script>

<div class="flex flex-col items-center justify-center">
    <h1 class="text-center text-2xl font-bold py-5 capitalize">Shimmering offers</h1>
    <section class=" w-full lg:w-[80%] lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-center content-center cursor-pointer">
        <div class="rounded overflow-hidden p-10 lg:p-2">
            <img class="rounded" src="/luxury-1.png" alt="">
        </div>
        <div class="flex flex-col gap-5 p-5  md:p-10 lg:p-2">
            {#each data as {title,img,color}}
                 <div class="flex rounded overflow-hidden shadow">
                     <img class="w-1/2 " src={img} alt={title}>
                     <p class={`${color} text-xl md:text-3xl flex items-center justify-center text-center w-full`}>{title}</p>
                 </div>
            {/each}
            
        </div>
    </section>
</div>