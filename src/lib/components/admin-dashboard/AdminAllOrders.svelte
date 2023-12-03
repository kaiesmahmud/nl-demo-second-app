<script>
    let ordersData =[
        {
            tran_id : "asdfowsse",
            user_id : "sdfsodiweonode",
            user_email : "user1@gmail.com",
            user_phone : "13216506513",
            p_id: "sdproductIdsdsdf",
            p_url: "sdproductIdsdsdf",
            p_name: "sdproductIdsdsdf",
            cat_id: "sdproductIdsdsdf",
            quantity: 4,
        },
        {
            tran_id : "asdfowsse",
            user_id : "sdfsodiweonode",
            user_email : "user1@gmail.com",
            user_phone : "13216506513",
            p_id: "sdproductIdsdsdf",
            p_url: "sdproductIdsdsdf",
            p_name: "sdproductIdsdsdf",
            cat_id: "sdproductIdsdsdf",
            quantity: 4,
            status: true,

        },
        {
            tran_id : "asdfowsse",
            user_id : "sdfsodiweonode",
            user_email : "user1@gmail.com",
            user_phone : "13216506513",
            p_id: "sdproductIdsdsdf",
            p_url: "sdproductIdsdsdf",
            p_name: "sdproductIdsdsdf",
            cat_id: "sdproductIdsdsdf",
            quantity: 4,
        },
        {
            tran_id : "asdfowsse",
            user_id : "sdfsodiweonode",
            user_email : "user1@gmail.com",
            user_phone : "13216506513",
            p_id: "sdproductIdsdsdf",
            p_url: "sdproductIdsdsdf",
            p_name: "sdproductIdsdsdf",
            cat_id: "sdproductIdsdsdf",
            quantity: 4,
        },
        {
            tran_id : "asdfowsse",
            user_id : "sdfsodiweonode",
            user_email : "user1@gmail.com",
            user_phone : "13216506513",
            p_id: "sdproductIdsdsdf",
            p_url: "sdproductIdsdsdf",
            p_name: "sdproductIdsdsdf",
            cat_id: "sdproductIdsdsdf",
            quantity: 4,
            status: true,

        },
        {
            tran_id : "asdfowsse",
            user_id : "sdfsodiweonode",
            user_email : "user1@gmail.com",
            user_phone : "13216506513",
            p_id: "sdproductIdsdsdf",
            p_url: "sdproductIdsdsdf",
            p_name: "sdproductIdsdsdf",
            cat_id: "sdproductIdsdsdf",
            quantity: 4,
        },
        {
            tran_id : "asdfowsse",
            user_id : "sdfsodiweonode",
            user_email : "user1@gmail.com",
            user_phone : "13216506513",
            p_id: "sdproductIdsdsdf",
            p_url: "sdproductIdsdsdf",
            p_name: "sdproductIdsdsdf",
            cat_id: "sdproductIdsdsdf",
            quantity: 4,
        },
        {
            tran_id : "asdfowsse",
            user_id : "sdfsodiweonode",
            user_email : "user1@gmail.com",
            user_phone : "13216506513",
            p_id: "sdproductIdsdsdf",
            p_url: "sdproductIdsdsdf",
            p_name: "sdproductIdsdsdf",
            cat_id: "sdproductIdsdsdf",
            quantity: 4,
            status: true,

        },
        {
            tran_id : "asdfowsse",
            user_id : "sdfsodiweonode",
            user_email : "user1@gmail.com",
            user_phone : "13216506513",
            p_id: "sdproductIdsdsdf",
            p_url: "sdproductIdsdsdf",
            p_name: "sdproductIdsdsdf",
            cat_id: "sdproductIdsdsdf",
            quantity: 4,
        },
        {
            tran_id : "asdfowsse",
            user_id : "sdfsodiweonode",
            user_email : "user1@gmail.com",
            user_phone : "13216506513",
            p_id: "sdproductIdsdsdf",
            p_url: "sdproductIdsdsdf",
            p_name: "sdproductIdsdsdf",
            cat_id: "sdproductIdsdsdf",
            quantity: 4,
            status: true,
        },
        {
            tran_id : "asdfowsse",
            user_id : "sdfsodiweonode",
            user_email : "user1@gmail.com",
            user_phone : "13216506513",
            p_id: "sdproductIdsdsdf",
            p_url: "sdproductIdsdsdf",
            p_name: "sdproductIdsdsdf",
            cat_id: "sdproductIdsdsdf",
            quantity: 4,
        },
    ]
    let tdStyle = "p-3 border-l"
</script>

<div>
    <h1 class="font-bold text-xl md:text-2xl ">All Orders</h1>
    <div class="relative overflow-hidden overflow-x-scroll overflow-y-scroll max-h-[80vh] ">
        <table class=" overflow-scroll text-xs md:text-sm">
            <tr class=" uppercase sticky top-0 bg-white">
                <th class="p-4">p_img</th>
                <th>tran_id</th>
                <th>quantity</th>
                <th>Status</th>
                <th>user_email</th>
                <th>user_phone</th>
                <th>user_id</th>
                <th>p_id</th>
                <th>p_url</th>
                <th>p_name</th>
                <th>cat_id</th>
            </tr>
            {#each ordersData as {tran_id,user_id,user_email,user_phone,p_id,p_url,p_name,cat_id,quantity,status}}
            <tr class="p-3 border-b">
                <td class="p-1 ">
                    <div class="w-14 rounded-full overflow-hidden">
                        <img class="w-full" src="https://d20q60vkvwzi8p.cloudfront.net/gallery/TraxNYC-Silver-and-Gold-Skull-Mask-Pendant-68843-Style-1.jpg" alt="">
                    </div>
                </td>
                <td class={tdStyle}>{tran_id}</td>
                <td class={`${tdStyle} font-bold text-center`} >{quantity}</td>
                <td class={tdStyle}>
                    {#if status}
                    <div class="bg-green-500 p-1 text-xs font-semibold rounded">Delivered</div>
                    {:else}
                    <div class="bg-orange-500 text-white p-1 text-xs font-semibold rounded">Pending</div>
                    {/if}
                </td>
                <td class={`${tdStyle} font-bold`} >{user_email}</td>
                <td class={`${tdStyle} font-semibold font-sans`} >{user_phone}</td>
                <td class={tdStyle}>{user_id}</td>
                <td class={tdStyle} >{p_id}</td>
                <td class={tdStyle} >{p_url}</td>
                <td class={tdStyle} >{p_name}</td>
                <td class={tdStyle} >{cat_id}</td>
            </tr>
            {/each}
        </table>

    </div>
</div> 