<script>
    import { onDestroy } from "svelte";

    export let message ;
    export let duration ;
  
    $: timer = setTimeout(() => {
      window.location.href = "https://traxnycnl-prowebmasters.vercel.app/checkout"; 
    }, duration);
  
    onDestroy(() => clearTimeout(timer));
  </script>
  
  <div class="popup backdrop-blur-2xl font-extrabold ">
    <p class="w-[80%] md:w-auto p-5 bg-black/40 rounded ">{message}</p>
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
  