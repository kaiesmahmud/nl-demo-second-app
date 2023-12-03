<script>
    let popularCategories = [
        {
            name:"Chains",
            url : "/men-collection",
            img:"https://d186vdbjetg11u.cloudfront.net/static/media/CUBAN-CURB.c2bf92a042d193227443.webp"
        }, 
        {
            name:"pendants",
            url : "/men-collection",

            img:"https://d20q60vkvwzi8p.cloudfront.net/files/img506091646491.jpeg"
        }, 
        {
            name:"Rings",
            url : "/men-collection",

            img:"https://d20q60vkvwzi8p.cloudfront.net/files/img522835665451.jpeg"
        }, 
        {
            name:"Earrings",
            url : "/men-collection",

            img:"https://d20q60vkvwzi8p.cloudfront.net/files/img534822680571.jpeg"
        }, 
        {
            name:"Bracelets",
            url : "/men-collection",

            img:"https://d20q60vkvwzi8p.cloudfront.net/files/img522129664431.jpeg"
        }, 
        {
            name:"Watches",
            url : "/men-collection",

            img:"https://d20q60vkvwzi8p.cloudfront.net/files/img520917662881.jpeg"
        }, 
        {
            name:"Collections",
            url : "/men-collection",

            img:"https://d20q60vkvwzi8p.cloudfront.net/files/img531538676641.jpeg"
        }, 
        {
            name:"Special Deals",
            url : "/men-collection",

            img:"https://d186vdbjetg11u.cloudfront.net/static/media/CUBAN-CURB.c2bf92a042d193227443.webp"
        }, 
    ]
    export let img ,type;
</script>

<section class=" p-5 md:py-10 flex items-center justify-center flex-col">
    <div class="w-full  lg:w-[75%]">
        <div class="relative  overflow-hidden rounded-lg ">
            <img class="w-full" src={img} alt="popular cat" >
            <div class=" absolute top-0 left-0 w-full h-full flex flex-col  justify-end">
    
                <h1 class={`text-2xl md:text-4xl capitalize  m-5 font-light `}>{type} Catagories:</h1>
                <div class="p-1 hidden md:flex items-center justify-center text-center">
                    <div class="w-full grid grid-cols-4 md:grid-cols-8 gap-1 text-xs p-2 md:p-4">
                        {#each popularCategories as {name,img,url}}
                        <a href={url} class=" shadow-lg flex flex-col gap-3 items-center justify-between p-2 md:p-3 lg:p-5 rounded-xl border border-slate-200  select-none cursor-pointer bg-white">
                            <div class="rounded-full overflow-hidden w-1/2">
                                <img src={img} alt={name} class="shadow-lg rounded-full hover:scale-110 transition-all ease-in">
                            </div>
                            <h1>{name}</h1>
                        </a>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
        <div class="p-1 flex md:hidden items-center justify-center text-center">
            <div class="w-full grid grid-cols-4 md:grid-cols-8 gap-1 text-xs p-2 md:p-4">
                {#each popularCategories as {name,img,url}}
                <a href={url} class=" shadow-lg flex flex-col gap-3 items-center justify-between p-2 md:p-3 lg:p-5 rounded-xl border border-slate-200  select-none cursor-pointer bg-white">
                    <div class="rounded-full overflow-hidden w-1/2">
                        <img src={img} alt={name} class="shadow-lg rounded-full hover:scale-110 transition-all ease-in">
                    </div>
                    <h1>{name}</h1>
                </a>
                {/each}
            </div>
        </div>
    </div>
</section>