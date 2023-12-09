<script>
    import Icon from '@iconify/svelte';
    let navItems = [
        {
            name:"Men's Collection", url:"/men-collection"
        },
        {
            name:"Women's Collection",url:"/women-collection"
        },
        // {
        //     name:"Custom Jewelry",url:"/custom-jewelry"
        // },
        // {
        //     name:"Special Offer",url:"/special-offer"
        // },
        // {
        //     name:"Contact Us",url:"/contact"
        // },
        {
            name:"About US",url:"/about"
        },
    ]
    let myLinks = [
        {
            name:"My Account",
            icon: "octicon:person-24",
            url:"https://traxnyc-demo-main.vercel.app/dashboard"
        },
        {
            name:"My Cart",
            icon: "mdi-light:cart",
            url:"https://traxnyc-demo-main.vercel.app/cart"
        },
    ]
    let navItemStyle = "py-1 md:py-2 px-2 md:px-3 lg:px-5 lg:py-3  text-sm  transition-all ease-in"
    let myLinksStyle = "flex gap-3 md:gap-0 items-center md:justify-center px-3 py-1 font-semibold transition-all ease-in rounded-full  lg:bg-white hover:bg-blue-200 "

    let showNav = false ;
    const handleNav = ()=> showNav=!showNav
    const handleGoto = ()=>{

    }
</script>

<div class="bg-white text-xs relative z-[101] ">

    <div class=" p-2 md:p-4 flex items-center justify-between md:px-10 border-t-2 border-orange-100">
        <a href="/" class="flex items-center gap-1 md:gap-5">
            <div class="w-10">
                <img src="https://d186vdbjetg11u.cloudfront.net/static/media/logo.d6d00ab41593f9e46540095c8affeac4.svg" alt="TRAXNYC">
            </div>
            <h1 class=" font-light text-lg md:text-xl lg:text-3xl">ISW Netherlands</h1>
        </a>
        <div class=" hidden md:flex items-center gap-1">
            {#each navItems as item(item.name)}
            <a href={item.url} class={` border-b-4 border-white hover:border-orange-500 hover:text-orange-600 ${navItemStyle}`}>{item.name}</a>
            {/each}
        </div>

        
        <div class=" md:hidden">
            {#if !showNav}
                <button on:click={handleNav} class="text-4xl md:hidden">
                    <Icon icon="jam:menu" />
                </button>            
            {/if}
        </div>
        
    </div>
    <div class="hidden md:flex items-center justify-between  md:px-10 pb-5">
        <div class="flex items-center">
            <div class="flex items-center gap-2 md:gap-4">
                {#each myLinks as item(item.name)}
                     <a href={item.url} class={myLinksStyle}>
                         <div class="text-xl md:text-2xl text-orange-500">
                             <Icon icon={item.icon} />
                         </div>
                         <p class=" hidden lg:inline-block font-light">{item.name}</p>
                     </a>
                {/each}
            </div>
        </div>
        <div class="w-[35%] hidden lg:flex border rounded border-red-200">
            <input type="text" class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-white sm:text-sm sm:leading-6" placeholder="Search Jewelry">
            <button class="text-xl md:text-2xl lg:text-3xl bg-orange-100 rounded p-2">
                <Icon icon="material-symbols-light:search" />
            </button>
        </div>

    </div>
    {#if showNav}
         <div class="bg-black text-white md:hidden min-h-screen fixed top-0 w-screen transition-all ease-in flex flex-col  z-[1000]">
            <div class="w-full  flex justify-between p-5">
                <a on:click={handleNav} href="/" class="flex items-center gap-2">
                    <div class="w-10">
                        <img src="https://d186vdbjetg11u.cloudfront.net/static/media/logo.d6d00ab41593f9e46540095c8affeac4.svg" alt="TRAXNYC">
                    </div>
                    <h1 class=" font-light text-lg md:text-xl lg:text-3xl">TRAXNYC</h1>
                </a>
                    <button on:click={handleNav} class="text-3xl md:hidden">
                    <Icon icon="radix-icons:cross-1" />
                </button>
            </div>
            <div class="flex flex-col my-10 p-5">
                {#each navItems as item(item.name)}
                <a href={item.url} class={`${navItemStyle} m-3 border-b-2 border-blue-500 `} on:click={handleNav}>{item.name}</a>
                {/each}
            </div>
            <div class=" mt-20 flex items-center justify-around">
                {#each myLinks as item(item.name)}
                 <a href={item.url} class={myLinksStyle} on:click={handleNav}>
                     <div class="text-xl md:text-3xl">
                         <Icon icon={item.icon} />
                     </div>
                     <p >{item.name}</p>
                 </a>
                {/each}
            </div>
         </div>
    {/if}
</div>
