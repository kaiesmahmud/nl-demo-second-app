<script>
    let benifits = [
        { up: "COMPLETELY",down:"CUSTOMIZABLE" },
        { up: "SENTIMENTAL",down:"AND EMOTIONAL VALUE" },
        { up: "EXTREMELY",down:"GREAT INVESTMENT" },
    ]
</script>


<h1 class=" font-bold text-3xl text-center text-slate-900">START YOUR CUSTOM JEWELRY PROJECT</h1>
<div class="flex items-center justify-center p-2">
    <iframe class="w-full md:w-2/3 rounded" width="560" height="315" src="https://www.youtube.com/embed/1qMjk-5SmPs?si=mSDAKII1_8F5bkwZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<h1 class=" font-bold text-3xl text-center text-slate-900 min-h-[50vh]">Form Here</h1>
<div class="flex flex-col gap-5 items-center justify-center bg-slate-800 text-white/90 py-10">
    <div class="text-4xl font-bold border-b-2  border-green-500">
        Benefits
    </div>
    <div class="flex flex-col md:flex-row md:items-center gap-5 md:justify-center">
        {#each benifits as item}
             <div class="p-5">
                <p class="text-xl md:text-2xl font-bold text-green-500/90">{item.up}</p>
                <p class="text-2xl md:text-4xl font-bold" >{item.down}</p>
             </div>
        {/each}
    </div>
</div>