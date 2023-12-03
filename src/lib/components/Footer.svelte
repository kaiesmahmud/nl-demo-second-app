<script>
    import Icon from '@iconify/svelte';
    let data = [
        {
            title: "Popular Collections",
            list : [
                {name:"chain",url: "/"},
                {name:"pendants",url: "/"},
                {name:"rings",url: "/"},
                {name:"custom products",url: "/"},
                {name:"saphire collection",url: "/"},
            ]
        },
        {
            title: "The company",
            list : [
                {name:"About us",url: "/"},
                {name:"Contact us",url: "/"},
                {name:"Reviews",url: "/"},
                {name:"Blog",url: "/"},
                {name:"Policy",url: "/"},
            ]
        },
        {
            title: "Find us on",
            list : [
                {name:"instagram",url: "/" ,icon: "mdi:instagram" },
                {name:"facebook",url: "/",icon: "ic:baseline-facebook"},
                {name:"YouTube",url: "/", icon:"mingcute:youtube-fill"},
                {name:"Reddit",url: "/", icon: "ic:baseline-reddit" },
                {name:"Twitter",url: "/", icon: "mdi:twitter" },
            ]
        },
    ]
</script>

<div class="flex flex-col items-center justify-center bg-gray-100 w-full text-xs md:text-sm">
    <section class=" w-full md:w-[90%] lg:w-[80%] grid grid-cols-2 lg:grid-cols-4 ">
        {#each data as item(item.title)}
             <div class={`p-5 py-10 capitalize ${item.title === "Popular Collections" && " col-span-2 md:col-span-1"}`}>
                <h5 class="text-lg md:text-xl lg:text-2xl text-red-500">{item.title}</h5>
                <div class="p-2 md:p-5 flex flex-col gap-5">
                    {#each item.list as i}
                         <a href={i.url} class="hover:text-red-400 border-b border-gray-100 hover:border-red-400 transition-all ease-in-out px-1 md:px-2 pb-2 flex items-center gap-3">
                            {#if i?.icon}
                                <div class="text-xl">
                                    <Icon icon={i.icon} />
                                </div>
                            {/if}
                            {i.name}
                        </a>
                    {/each}
                </div>
             </div>
        {/each}
        <div class=" col-span-2 md:col-span-1 p-5 py-10 capitalize">
            <h5 class="text-lg md:text-xl lg:text-2xl text-red-500">Location</h5>
            <div class="p-1 overflow-hidden rounded">
                <iframe title="Demo Map" class="w-full " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1983225743893!2d-73.98386152324579!3d40.7576625713868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ff09307ea1%3A0x95c9ecb8e9543c0c!2sTraxNYC!5e0!3m2!1sen!2sbd!4v1701339781485!5m2!1sen!2sbd" width="400" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
    <footer class="text-xs md:text-sm text-center p-5 italic">Demo Project, 2023 | November. All Rights Reserved | <a href="/admin" class="font-bold hover:text-red-500 p-3 ">Admin Panel</a></footer>
</div>