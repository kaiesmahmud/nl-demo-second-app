<script>
    import Icon from '@iconify/svelte';
    import CertainJewelry from './CertainJewelry.svelte';
</script>

<div class=" relative flex flex-col gap-5 items-center min-h-[70vh]">
    <img class=" absolute top-0 w-full z-0" src="/banner.png" alt="banner">
    <div class="z-10 w-[90%] md:w-[75%] p-5 md:pl-16">
        <h1 class="text-white mt-1 md:mt-20  text-2xl md:text-5xl font-extrabold md:font-bold">Shopping with <span class="text-red-500">TRAXNYC</span></h1>
        <div class="flex gap-2 md:gap-5 md:items-center md:mt-10">
            <button class="flex items-center gap-2 bg-orange-200 rounded-full px-3 py-2 md:px-5 md:py-3">
                <div class="text-lg md:text-3xl ">
                    <Icon icon="maki:jewelry-store" />
                </div>
                <div class="text-start">
                    <p class="text-sm md:text-xl font-bold capitalize">shop now</p>
                    <p class="text-xs hidden md:inline-block">Holiday Collection</p>
                </div>
            </button>
            <button class="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-2 md:px-5 md:py-3">
                <div class="text-lg md:text-3xl ">
                    <Icon icon="carbon:chat" />
                </div>
                <div class="text-start">
                    <p class="text-sm md:text-xl font-bold capitalize">Live Chat now</p>
                    <p class="text-xs hidden md:inline-block ">Holiday Collection</p>
                </div>
            </button>
        </div>
    </div>
    <div class="w-full md:w-[75%] shadow-lg bg-gradient-to-b from-orange-50 to-orange-200 z-10 rounded md:p-5">
        <!-- <h1 class="text-orange-800 text-xl md:text-3xl font-bold text-center">Are You Looking For Certain Types Of Jewelry?</h1> -->
        <CertainJewelry/>
    </div>


</div>