<script>
	import AdminAnalytics from './AdminAnalytics.svelte';
    import { showAdminNavItem } from "../../store/store";
    import AdminAllCategory from './AdminAllCategory.svelte';
    import AdminAllProducts from './AdminAllProducts.svelte';
    import AdminAllUsers from './AdminAllUsers.svelte';
    import AdminAllOrders from './AdminAllOrders.svelte';
    import AdminSEO from './AdminSEO.svelte';
    import AdminAddProducts from './AdminAddProducts.svelte';

    let showItemsName = [
        "all-products",
        "analytics",
        "seo",
        "all-category",
        "all-users",
        "all-orders",
    ]
    
</script>

<section class="w-full md:w-2/3 bg-white rounded shadow-lg p-3 md:p-5 text-slate-800">
    {#if $showAdminNavItem === "analytics"}
        <AdminAnalytics/>
    {/if}
    {#if $showAdminNavItem === "seo"}
        <AdminSEO/>
    {/if}
    {#if $showAdminNavItem === "all-category"}
        <AdminAllCategory/>
    {/if}
    {#if $showAdminNavItem === "all-products"}
        <AdminAllProducts/>
    {/if}
    {#if $showAdminNavItem === "all-users"}
        <AdminAllUsers/>
    {/if}
    {#if $showAdminNavItem === "all-orders"}
        <AdminAllOrders/>
    {/if}
    {#if $showAdminNavItem === "add-products"}
        <AdminAddProducts/>
    {/if}
</section>