<script>
	import { allUsersData } from './../../store/store.js';
    import Icon from '@iconify/svelte';
    console.log($allUsersData)
</script>

<div>
    <h1 class="font-bold text-xl md:text-2xl ">All Users</h1>

    {#if $allUsersData}
        <div class=" overflow-hidden overflow-x-scroll max-h-[80vh]">
            <table class=" text-xs md:text-sm w-full overflow-y-scroll ">
                    <tr>
                        <th class=" border-b"> ID</th>
                        <th class="border-l border-b"> Name</th>
                        <th class="border-l border-b"> Email</th>
                        <th class="border-l border-b">Phone</th>
                        <th class="border-l border-b">Role</th>
                        <th class="border-l border-b">Orders</th>
                        <!-- <th class="border-l border-b">Orders</th> -->
                    </tr>
                    {#each $allUsersData as {user_id,user_email,user_fname,user_lname,user_img,user_order,user_phone,}}
                        <tr class=" ">
                            <td class="border-b-2 p-1  font-light flex items-center gap-3">
                                {#if user_img}
                                     {user_img}
                                {:else}
                                <div class="w-12 rounded-full overflow-hidden">
                                    <img class="w-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                                </div>
                                {/if}
                                {user_id}
                            </td>
                            <!-- <td class="border-b-2 p-3  font-light"></td> -->
                            <td class="border-l border-b-2 p-2 capitalize font-semibold">{user_fname} {user_lname}</td>
                            <td class="border-l border-b-2 p-2">{user_email}</td>
                            <td class="border-l border-b-2 p-2">{user_phone || 123123123098}</td>
                            <td class="border-l border-b-2 p-2">customer</td>
                            <td class="border-l border-b-2 p-2">{user_order || "Nothing"}</td>
                        </tr>
                    {/each}
                    
            </table>

        </div>
    {/if}
</div>

<style>
    /* th{
        border-left: 1px solid gray;
        padding: 5px;
    }
    td{
        border-bottom: 1px solid gray;
        padding: 5px;
    } */
</style>