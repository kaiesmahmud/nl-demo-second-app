<script>
    import Icon from '@iconify/svelte';
    import CertainJewelry from './CertainJewelry.svelte';
</script>

<div class=" relative flex flex-col gap-5 items-center min-h-[70vh]">
    <img class=" absolute top-0 w-full z-0" src="/banner.png" alt="banner">
    <div class="z-10 w-[90%] md:w-[75%] p-5 md:pl-16">
        <h1 class="text-red-500 md:text-white mt-1 md:mt-20  text-2xl md:text-5xl font-extrabold md:font-bold">Shopping with <span class="text-red-500">TRAXNYC Belgium</span></h1>
    </div>
    <div class="w-full md:w-[75%] shadow-lg bg-gradient-to-b from-orange-50 to-orange-200 z-10 rounded md:p-5">
        <CertainJewelry/>
    </div>


</div>