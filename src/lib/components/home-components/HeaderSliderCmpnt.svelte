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
    type : 'loop',
    autoplay: true,
    // perPage : 2,
    interval: 3500,
    arrows: false,
    // pagination: false,
    // width: '100%',
  }
  let data = [
    // "/b-1.png",
    "/b-2.png",
    "/b-3.png",
    "/b-4.png",
    // "/b-2.png",
  ]
</script>
<div class="flex items-center justify-center p-5">
  <section class="w-full lg:w-[80%] rounded overflow-hidden">
    <Splide  options={options}
      aria-label="My Favorite Images" class="w-full cursor-pointer">
        {#each  data as item}
            <SplideSlide >
              <div class=" rounded shadow-xl">
                <img src={item} alt={item}>
              </div>
            </SplideSlide>
        {/each}
      </Splide>
  </section>
</div>
