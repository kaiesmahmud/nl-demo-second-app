<script>
    let data = [
        {name:"rings", url: "/ring-1.png"},
        {name:"necklace", url: "/necklace-1.png"},
        {name:"earrings", url: "/earring-1.png"},
        {name:"bracelets", url: "/bracelets-1.png"},
    ]
</script>

<div class="flex flex-col items-center justify-center">
    <h1 class="text-xl md:text-3xl font-bold p-3 capitalize text-orange-900 ">Are you looking for certain types of jewelry?</h1>
    <section class="w-full ">
        <div class=" grid grid-cols-2 md:grid-cols-4 gap-1 p-5">
            {#each data as {name,url}}
                <div class="rounded overflow-hidden text-center text-xl md:text-2xl capitalize z-[10]">
                    <div class=" overflow-hidden relative aspect-square flex items-end">
                        <img class=" absolute top-0 w-full h-full hover:scale-110 transition-all ease-in z-[-1]" src={url} alt={name}>
                        <div class="p-2 bg-orange-200/30 z-[10] w-full">
                            {name}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </section>

</div>