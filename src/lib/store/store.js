import { writable } from 'svelte/store';


export let categoryDetails = writable(null)
export let showDashboardBodyTopic = writable("my-order")
let allorderDummyLists = [
    {
        name:"TraxNYC Silver and Gold Skull Mask Pendant 68843",
        url: "men-collection/silver-gold-skull-mask-pendant-68843",
        img: "https://d20q60vkvwzi8p.cloudfront.net/gallery/TraxNYC-Silver-and-Gold-Skull-Mask-Pendant-68843-Style-1.jpg",
        price:"5950",
        type:"14K Yellow GOLD",
        allImgs : [],
        specs : [
            {
            name: "Diamond Origin",
            value: "natural"
            },
            {
            name: "Cut",
            value: "round"
            },
            {
            name: "Diamond Weight",
            value: "0.28ct"
            },
            {
            name: "Diamond Color",
            value: "G"
            },
            {
            name: "Diamond Clarity",
            value: "SI1"
            },
            {
            name: "Setting",
            value: "Prong"
            },
        ],
        status: "pending",
    },
    {
        name:"10K Gold Diamond Pendant 63618",
        url: "men-collection/gold-diamond-pendant-63618",
        img: "https://d20q60vkvwzi8p.cloudfront.net/gallery/10K-Yellow-Gold-Micro-Pave-Diamond-Hamsa-Hand-Charm-Pendant-63618-Metal-1.jpg",
        price:"610",
        type:"10K Yellow GOLD",
        allImgs : [],
        specs : [
            {
            name: "Diamond Origin",
            value: "natural"
            },
            {
            name: "Cut",
            value: "round"
            },
            {
            name: "Diamond Weight",
            value: "0.28ct"
            },
            {
            name: "Diamond Color",
            value: "G"
            },
            {
            name: "Diamond Clarity",
            value: "SI1"
            },
            {
            name: "Setting",
            value: "Prong"
            },
        ],
        status: "delivered",
    },
    {
        name:"Diamond Lion Pendant 65810",
        url: "men-collection/diamond-lion-pendant-65810",
        img: "https://d20q60vkvwzi8p.cloudfront.net/gallery/TraxNYC--Diamond-Lion-Pendant-65810-Metal-1.jpg",
        price:"550",
        type:"10K Yellow GOLD",
        allImgs : [],
        specs : [
            {
            name: "Diamond Origin",
            value: "natural"
            },
            {
            name: "Cut",
            value: "round"
            },
            {
            name: "Diamond Weight",
            value: "0.28ct"
            },
            {
            name: "Diamond Color",
            value: "G"
            },
            {
            name: "Diamond Clarity",
            value: "SI1"
            },
            {
            name: "Setting",
            value: "Prong"
            },
        ],
        status: "delivered",
    },
]
export let showAllOrderLists = writable(allorderDummyLists)
let pendinOrders = [
    {
        name:"TraxNYC Silver and Gold Skull Mask Pendant 68843",
        url: "men-collection/silver-gold-skull-mask-pendant-68843",
        img: "https://d20q60vkvwzi8p.cloudfront.net/gallery/TraxNYC-Silver-and-Gold-Skull-Mask-Pendant-68843-Style-1.jpg",
        price:"5950",
        type:"14K Yellow GOLD",
        allImgs : [],
        specs : [
            {
            name: "Diamond Origin",
            value: "natural"
            },
            {
            name: "Cut",
            value: "round"
            },
            {
            name: "Diamond Weight",
            value: "0.28ct"
            },
            {
            name: "Diamond Color",
            value: "G"
            },
            {
            name: "Diamond Clarity",
            value: "SI1"
            },
            {
            name: "Setting",
            value: "Prong"
            },
        ],
        status: "pending",

    },
]
export let showPendingOrders = writable(pendinOrders)
export let showAdminNavItem = writable("all-products")
export let allProductsData = writable([])
export let allUsersData = writable([])

export let allcategory = writable([])
export let myCartData = writable([])
export let confirmedOrder = writable([])

export let myPurchaseProductsData = writable([])
export let product_url = writable("")

