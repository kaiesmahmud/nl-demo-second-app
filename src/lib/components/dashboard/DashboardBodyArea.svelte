<script>
    import { showDashboardBodyTopic } from "../../store/store";
    import EditAddressView from "./EditAddressView.svelte";
    import MyAccountEditView from "./MyAccountEditView.svelte";
    import MyOrderView from "./MyOrderView.svelte";

    let showArea = [
        "my-order",
        "my-account",
        "edit-address",
        "my-wishlists",
        "compare-items",
    ]
    
</script>
<div class="w-full md:w-2/3 bg-gray-100/80 rounded p-2 md:p-5">
    {#if $showDashboardBodyTopic === "my-order"}
    <MyOrderView/>
    {/if}
    {#if $showDashboardBodyTopic === "my-account"}
    <MyAccountEditView/>
    {/if}
    {#if $showDashboardBodyTopic === "edit-address"}
    <EditAddressView/>
    {/if}
    {#if $showDashboardBodyTopic === "my-wishlists"}
         <h1 class="text-2xl md:text-3xl font-bold capitalize">my-wishlists</h1>
    {/if}
    {#if $showDashboardBodyTopic === "compare-items"}
         <h1 class="text-2xl md:text-3xl font-bold capitalize">compare-items</h1>
    {/if}
</div>