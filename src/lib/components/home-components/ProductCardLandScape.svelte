<script>
    export let product ;
    const {p_name , p_img,p_price ,p_url,cat_id}= product; 
</script>
{#if product}
     <a href={`${cat_id}/${p_url}`} class="w-full min-h-[150px] shadow rounded-xl overflow-hidden my-3 bg-white hover:shadow-xl flex items-center transition-all ease-in">
        <div class="w-1/3">
            <img src={p_img} alt={p_name}>
        </div>
        <div class="w-2/3 h-full flex flex-col gap-5 capitalize">
            <p class="text-sm font-bold">{p_name}</p>
            <p class="font-bold text-black/80">${p_price}</p>
        </div>
    </a>
{/if}