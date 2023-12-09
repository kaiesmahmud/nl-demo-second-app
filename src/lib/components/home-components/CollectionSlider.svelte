<script>
    import Icon from '@iconify/svelte';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    // Default theme
    import '@splidejs/svelte-splide/css';

    // or other themes
    import '@splidejs/svelte-splide/css/skyblue';
    import '@splidejs/svelte-splide/css/sea-green';

    // or only core styles
    import '@splidejs/svelte-splide/css/core';
    export let intervalTime , products , name 
    // , subCategory ,titleCss ,productCardTypeCss

    let options={
        type   : 'loop',
        drag   : 'free',
        snap   : true,
        autoplay: true,
        interval: intervalTime,
        // perPage: 3,
        arrows: false,
        pagination: false,
        autoWidth: true,
        pauseOnHover: true,
        // paginationKeyboard: false
        breakpoints: {
          640: {
            autoplay: false              },
        // 4040: {
        // 	perPage: 4,
        //     },
        }

  }
</script>
<section class="py-5 md:py-10 flex flex-col items-center justify-center w-full">
  <div class="w-full lg:w-[80%]">
    <h1 class={`text-2xl md:text-4xl capitalize  m-5 font-semibold `}>{name}:</h1>
    <Splide  options={options}
      aria-label="My Favorite Images" class="w-full cursor-pointer pb-10">
        {#each  products as {p_id,p_name,p_url,cat_id,cat_name,p_price,p_img,p_type,p_reg_price,p_stock}}
            <SplideSlide  class="w-[55%] md:w-[40%] lg:w-[20%] flex items-center justify-center m-1">
              <a href={`/${cat_name}/${p_id}`} class="shadow-lg bg-white m-3 md:m-5 rounded-2xl overflow-hidden group">
                <!-- <p class={`font-bold text-white text-sm text-center uppercase py-2 px-3 ${productCardTypeCss}`}>{p_type}</p> -->
                <div class="relative w-full ">
                    <div class=" relative object-center aspect-square overflow-hidden rounded flex items-center justify-center bg-white p-1">
                        <img src={p_img} alt={p_name} class=" group-hover:scale-110 rounded hover:scale-110 transition-all ease-in">
                        <div class=" absolute w-full h-full top-0 left-0  z-40 transition-all ease-in-out overflow-hidden">
                          <div class="flex justify-end">
                            <div class="p-2  rounded-full m-1 hover:text-red-500 bg-red-100 transition-all ease-in">
                              <Icon icon="ph:heart" />
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="text-sm p-2 font-semibold">
                  {p_name.substring(0,35)}...  
                </div>
                <div class="rounded-[25px] p-1 md:p-2 px-3 text-xs md:text-sm font-bold text-center">
                  <span class=" line-through text-red-500 text-sm font-extralight">${p_reg_price}</span> 
                  ${p_price}
                </div>
                <div class="p-1 md:p-2 px-2 md:px-3 text-xs font-light text-center bg-yellow-500/10">{p_type}</div>
              </a>
            </SplideSlide>
        {/each}
    </Splide>
  </div>
</section>
