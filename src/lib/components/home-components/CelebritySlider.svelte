<script>
	import { HomePageData } from './../../store/dummydata.js';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    // Default theme
    import '@splidejs/svelte-splide/css';

    // or other themes
    import '@splidejs/svelte-splide/css/skyblue';
    import '@splidejs/svelte-splide/css/sea-green';

    // or only core styles
    import '@splidejs/svelte-splide/css/core';

    let options={
        type   : 'loop',
        drag   : 'free',
        snap   : true,
        // perPage: 3,
        arrows: false,
        pagination: false,
        autoWidth: true,
        // paginationKeyboard: false
        // breakpoints: {
		// 640: {
		// 	perPage: 2,
		//     },
		// 4040: {
		// 	perPage: 4,
		//     },
        // }

  }
</script>
<div class="bg-white py-10">

  <h1 class="text-2xl md:text-4xl uppercase text-center">Celebrity Jewelry</h1>
  <Splide  options={options}
    aria-label="My Favorite Images" class="w-full cursor-pointer">
      {#each  HomePageData.celebritySliders as item(item.name)}
          <SplideSlide  class="w-[50%] md:w-[40%] lg:w-[20%] flex items-center justify-center">
            <div class=" overflow-visiblerounded shadow bg-black/10 m-3 md:m-5 p-3 md:p-5 rounded">
              <!-- <div class=""> -->
                  <p class="font-light md:text-xl uppercase py-2">{item.name}</p>
              <!-- </div> -->
              <div class="relative w-full">
                  <div class=" object-center aspect-square overflow-hidden rounded">
                      <img src={item.img} alt={item.name} class="rounded hover:scale-110 transition-all ease-in">
                  </div>
                  <img src={item.productimg} alt={item.name} class="w-16 md:w-1/3  rounded-full absolute bottom-0 left-0 md:translate-x-[100%] translate-x-[50%] translate-y-[30%] z-10 border-4 border-black/30 hover:scale-110 transition-all ease-in">
              </div>
            </div>
          </SplideSlide>
      {/each}
    </Splide>
</div>
