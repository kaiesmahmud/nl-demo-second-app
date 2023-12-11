<script>
    import { onDestroy } from "svelte";

    export let message ;
    export let duration ;
  
    $: timer = setTimeout(() => {
      window.location.href = "https://traxnycnl-prowebmasters.vercel.app/checkout"; 
    }, duration);
  
    onDestroy(() => clearTimeout(timer));
  </script>
  
  <div class="popup backdrop-blur-2xl font-bold  p-3">
    <div class="w-[300px] md:w-[400px] p-5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded flex  gap-5 flex-col items-center text-center shadow-lg">
      <img class="w-20" src="https://d186vdbjetg11u.cloudfront.net/static/media/logo.d6d00ab41593f9e46540095c8affeac4.svg" alt="">
      <p class="    ">{message}</p>
    </div>
  </div>
  
  <style>
    .popup {
        z-index: 10000;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .popup p {
      color: white;
      font-size: 20px;
    }
  </style>
  