<script>
	import A_Financial from './analytics/components/A_Financial.svelte';
	import A_Loans from './analytics/components/A_Loans.svelte';
	import A_Savings from './analytics/components/A_Savings.svelte';
	import A_Subscriptions from './analytics/components/A_Subscriptions.svelte';
	import A_Budget from './analytics/components/A_Budget.svelte';
	import A_Report from './analytics/components/A_Report.svelte';
	import A_Transactions from './analytics/components/A_Transactions.svelte';
	import A_Cards from './analytics/components/A_Cards.svelte';
    
    let visitors = [
      {title:"total visitors",value: 12312},
      {title:"home page visitors",value: 10541},
      {title:"catagory page visitors",value: 1326},
      {title:"product searched",value: 8412},
      // {title:"continues Visitors",value: 2051},
      {title:"android user",value: 8000},
      {title:"IOS user",value: 3000},
      {title:"PC/Laptop user",value: 10000},
    ]

    let Totalredirects = [
      {title:"Webshop A",value: 12312},
      {title:"Webshop B",value: 10541},
      {title:"Webshop C",value: 500},
    ]
</script>

<div>
    <h1 class="font-bold text-xl md:text-2xl pb-3">Analytics</h1>
    <hr>
    <div class="w-2/3 flex flex-col gap-3 p-2 capitalize">
    <!-- <div class="grid grid-cols-2 md:grid-cols-3 gap-3 p-2"> -->
      {#each visitors as {title,value}}
      <div class="capitaliz flex items-center justify-between p-3 border-b border-gray-200">
      <!-- <div class="p-2 capitalize text-center rounded-2xl shadow-lg bg-gray-50 flex flex-col items-center justify-around aspect-square"> -->
        <h1 class="font-semibold">{title}:</h1>
        <p class=" text-lg font-nunito">{value}</p>
      </div>
      {/each}
    </div>
    <h1 class="font-bold text-xl md:text-2xl py-3">Total Redirects:</h1>
    <hr>
    <div class=" w-full md:w-2/3 grid grid-cols-1  gap-3 p-2">
      {#each Totalredirects as {title,value}}
      <div class="capitaliz flex items-center justify-between p-3 border-b border-gray-200">
        <h1 class="font-semibold">{title}:</h1>
        <p class="  text-lg font-nunito">{value}</p>
      </div>
      {/each}
    </div>
    <!-- <h1 class=" text-xl md:text-2xl ">All Analytics will Be shown Here</h1> -->
    <!-- <div>
        <div class="main-content-holder">
            <div class="content-grid-one">
                <A_Cards />
                <A_Transactions />
                <A_Report />
            </div>
            <div class="content-grid-two">
                <A_Budget />
                <div class="grid-two-item">
                  <div class="subgrid-two">
                    <A_Subscriptions />
                    <A_Savings />
                  </div>
                </div>
    
                <div class="grid-two-item">
                  <div class="subgrid-two">
                    <A_Loans />
                    <A_Financial />
                  </div>
                </div>
            </div>
        </div>
    </div> -->
    
</div>

<!-- <style>
    /* main content holder */
.main-content-holder {
  display: grid;
  row-gap: 20px;
}
.content-grid-one {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
}
.content-grid-two {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
}

.subgrid-two {
  display: grid;
  row-gap: 20px;
  height: 100%;
}

@media screen and (max-width: 1200px) {
  .content-grid-one,
  .content-grid-two {
    column-gap: 12px;
  }
  .main-content-holder,
  .subgrid-two {
    row-gap: 12px;
  }
}

@media screen and (max-width: 992px) {
  .content-grid-one {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 12px;
  }
  .content-grid-two {
    grid-template-columns: repeat(2, 1fr);
  }
  .content-grid-two .grid-two-item:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .content-grid-two .grid-two-item:nth-child(3) .subgrid-two {
    grid-template-columns: repeat(2, 1fr);
    height: 220px;
    column-gap: 12px;
  }
  .content-grid-two {
    row-gap: 12px;
  }
}

@media screen and (max-width: 768px) {
  .content-grid-one {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 0;
  }
  .content-grid-two {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 0;
  }
  .content-grid-two .grid-two-item:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .content-grid-two .grid-two-item:nth-child(3) .subgrid-two {
    grid-template-columns: repeat(1, 1fr);
    height: auto;
  }
  .content-grid-two .grid-two-item:nth-child(3) .subgrid-two .subgrid-two-item {
    height: 220px;
  }
}

</style> -->