<script>
    let data = [
        {name:"rings", url: "/ring-1.png"},
        {name:"necklace", url: "/necklace-1.png"},
        {name:"earrings", url: "/earring-1.png"},
        {name:"bracelets", url: "/bracelets-1.png"},
    ]
</script>

<div class="flex flex-col items-center justify-center">
    <h1 class="text-xl lg:text-2xl font-semibold p-5 capitalize ">Are you looking for certain types of jewelry?</h1>
    <section class="w-full lg:w-[75%]">
        <div class=" grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
            {#each data as {name,url}}
                <div class="rounded overflow-hidden text-center text-xl md:text-2xl capitalize bg-slate-200">
                    <div class=" overflow-hidden ">
                        <img class="hover:scale-110 transition-all ease-in" src={url} alt={name}>
                    </div>
                    <div class="p-2">
                        {name}
                    </div>
                </div>
            {/each}
        </div>
    </section>

</div>