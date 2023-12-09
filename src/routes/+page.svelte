<script>
    import Icon from '@iconify/svelte';
    import HeaderSliderCmpnt from '../lib/components/home-components/HeaderSliderCmpnt.svelte';
    import CelebritySlider from '../lib/components/home-components/CelebritySlider.svelte';
    import ServiceSection from '../lib/components/home-components/ServiceSection.svelte';
    import CollectionSlider from '../lib/components/home-components/CollectionSlider.svelte';
    import { menCollectionData, womenCollectionData } from '../lib/store/dummydata';
    import Support from '../lib/components/Support.svelte';
    import { allProductsData } from '../lib/store/store';
    import HeroSection from '../lib/components/home-components/HeroSection.svelte';
    import PopularCat from '../lib/components/home-components/PopularCat.svelte';
    import SaphireCollection from '../lib/components/home-components/SaphireCollection.svelte';
    import HotDeals from '../lib/components/home-components/HotDeals.svelte';
    import YoutubeVideo from '../lib/components/home-components/YoutubeVideo.svelte';
    import CertainJewelry from '../lib/components/home-components/CertainJewelry.svelte';
    import HeaderSection from '../lib/components/home-components/HeaderSection.svelte';

    let titleCssMen= "text-transparent capitalize bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600"
    let titleCssWomen= "text-transparent capitalize bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400"
    let productCardTypeCssMen = "bg-gradient-to-r from-cyan-600 to-teal-500"

    let subCategory = [
        "Chains", "pendants", "Rings", "Earrings", "Bracelets", "Watches", "Collections", "Special Deals"
    ]
</script>
<!-- <HeaderSliderCmpnt/> -->
<HeaderSection/>
<CollectionSlider 
intervalTime={2000} 
{subCategory} 
products={$allProductsData} 
name={"Your Favourites"} 
titleCss={titleCssMen}
productCardTypeCss={productCardTypeCssMen}
/>

<HotDeals/>

<!-- <CertainJewelry/> -->
<PopularCat type={"Gold"} img={"https://www.juwelo.nl/amg/c55d16e38836b8527c3b62a6f3e6eb5f/1160/media/banner/de/common/gold_silber_homepage/459fd68e_2023-03-15_webbanner_gold_hell.jpg"}/>

<SaphireCollection/>

<PopularCat type={"Silver"} img={"https://www.juwelo.nl/amg/276e225aaa5a289d7c3b62a6f3e6eb5f/1160/media/banner/de/common/gold_silber_homepage/4a45562a_2023-03-15_webbanner_silber_hell.jpg"}/>

<YoutubeVideo/>
<Support/>

