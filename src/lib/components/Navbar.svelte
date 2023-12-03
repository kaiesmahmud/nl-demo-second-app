<script>
    import Icon from '@iconify/svelte';
    let navItems = [
        {
            name:"Men's Collection", url:"/men-collection"
        },
        {
            name:"Women's Collection",url:"/women-collection"
        },
        {
            name:"Custom Jewelry",url:"/custom-jewelry"
        },
        {
            name:"Special Offer",url:"/special-offer"
        },
        {
            name:"Contact Us",url:"/contact"
        },
        {
            name:"About US",url:"/about"
        },
    ]
    let myLinks = [
        {
            name:"My Account",
            icon: "octicon:person-24",
            url:"/dashboard"
        },
        {
            name:"My Cart",
            icon: "mdi-light:cart",
            url:"/cart"
        },
    ]
    let navItemStyle = "py-1 md:py-2 px-2 md:px-3 lg:px-5 lg:py-3  text-sm  transition-all ease-in"
    let myLinksStyle = "flex gap-3 md:gap-0 items-center md:justify-center px-3 py-1 font-semibold transition-all ease-in rounded-full  lg:bg-white hover:bg-red-200 "

    let showNav = false ;
    const handleNav = ()=> showNav=!showNav
    const handleGoto = ()=>{

    }
</script>

<div class="bg-white text-xs relative z-[101] ">
    <div class="flex items-center justify-between px-3 md:px-5 md:py-2 pb-1">
        <div class="flex items-center gap-3">
            <div class="text-sm text-red-500">
                <Icon icon="carbon:location" />
            </div>
            21ST, City name here
        </div>
        <div class="flex items-center gap-3">
            <div class="flex items-center gap-3">
                <p>
                    English
                </p>
                <div class="text-xs">
                    <Icon icon="teenyicons:down-outline" />
                </div>
            </div>
            <button class="flex gap-1 bg-red-100 hover:bg-red-600 hover:text-white rounded shadow px-3 py-2 transition-all ease-in ">
                <div >
                    Sign Up
                </div>
            </button>
        </div>

    </div>
    <div class=" p-2 md:p-4 flex items-center justify-between md:px-10 border-t-2 border-red-100">
        <a href="/" class="flex items-center gap-1 md:gap-5">
            <div class="w-10">
                <img src="https://d186vdbjetg11u.cloudfront.net/static/media/logo.d6d00ab41593f9e46540095c8affeac4.svg" alt="TRAXNYC">
            </div>
            <h1 class=" font-light text-lg md:text-xl lg:text-3xl">TRAXNYC</h1>
        </a>
        <div class="w-[25%] hidden lg:flex border rounded border-red-200">
            <input type="text" class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-white sm:text-sm sm:leading-6" placeholder="Search Jewelry">
            <button class="text-xl md:text-2xl lg:text-3xl bg-red-100 rounded p-2">
                <Icon icon="material-symbols-light:search" />
            </button>
        </div>
        <div class="flex items-center">
            <a href="tel:123123123" class=" hidden p-5 md:flex items-center gap-3 font-bold">
                <div class="text-xl md:text-2xl text-red-500">
                    <Icon icon="fluent:call-20-regular" />
                </div>
                <p class="hidden lg:inline-block">123 456 7890</p>
            </a>
            <div class="flex items-center gap-2 md:gap-4">
                {#each myLinks as item(item.name)}
                     <a href={item.url} class={myLinksStyle}>
                         <div class="text-xl md:text-2xl text-red-500">
                             <Icon icon={item.icon} />
                         </div>
                         <p class=" hidden lg:inline-block font-light">{item.name}</p>
                     </a>
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
        
    </div>
    <div class=" flex items-center justify-between  md:px-10 border-t-2 border-red-500">
        <div class=" hidden md:flex items-center gap-1">
            {#each navItems as item(item.name)}
            <a href={item.url} class={` border-b-4 border-white hover:border-red-500 hover:text-red-600 ${navItemStyle}`}>{item.name}</a>
            {/each}
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
                <a href={item.url} class={`${navItemStyle} m-3 border-b-2 border-red-500 `} on:click={handleNav}>{item.name}</a>
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
<!-- -----Fixed Navbar------- -->
 <!-- <section class=" fixed top-0  w-full lg:w-[80%] bg-white z-[101]">
    <div class=" p-2 md:p-4 flex items-center justify-between md:px-10 border-t-2 border-red-100">
        <a href="/" class="flex items-center gap-1 md:gap-5">
            <div class="w-10">
                <img src="https://d186vdbjetg11u.cloudfront.net/static/media/logo.d6d00ab41593f9e46540095c8affeac4.svg" alt="TRAXNYC">
            </div>
            <h1 class=" font-light text-lg md:text-xl lg:text-3xl">TRAXNYC</h1>
        </a>
        <div class="w-[25%] hidden lg:flex border rounded border-red-200">
            <input type="text" class=" w-full rounded p-2 " placeholder="Search Jewelry">
            <button class="text-xl md:text-2xl lg:text-3xl bg-red-100 rounded p-2">
                <Icon icon="material-symbols-light:search" />
            </button>
        </div>
        <div class="flex items-center">
            <a href="tel:123123123" class=" hidden p-5 md:flex items-center gap-3 font-bold">
                <div class="text-xl md:text-2xl text-red-500">
                    <Icon icon="fluent:call-20-regular" />
                </div>
                <p class="hidden lg:inline-block">123 456 7890</p>
            </a>
            <div class="flex items-center gap-2 md:gap-4">
                {#each myLinks as item(item.name)}
                     <a href={item.url} class={myLinksStyle}>
                         <div class="text-xl md:text-2xl text-red-500">
                             <Icon icon={item.icon} />
                         </div>
                         <p class=" hidden lg:inline-block font-light">{item.name}</p>
                     </a>
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
        
    </div>
    <div class=" flex items-center justify-between  md:px-10 border-t-2 border-red-500">
        <div class=" hidden md:flex items-center gap-1">
            {#each navItems as item(item.name)}
            <a href={item.url} class={` border-b-4 border-white hover:border-red-500 hover:text-red-600 ${navItemStyle}`}>{item.name}</a>
            {/each}
        </div>
        

    </div>
 </section> -->
