<script>
    import logo from '$lib/assets/footerlogo.png'; // Your logo image path
    import background from '$lib/assets/footerimg.png'; 
    import { Facebook, Twitter, Youtube, Mail } from 'lucide-svelte';
</script>

<footer
  class="text-gray-200 py-8 text-center bg-cover bg-center bg-no-repeat"
  style="background-image: url({background});"
>

<div class="flex justify-center items-center gap-4 mb-6">
    <span class="text-2xl font-[edensor]">Connect</span>
  
    <a href="#"
      class="flex items-center justify-center w-10 h-10 border rounded-full bg-white/10 hover:bg-blue-500 transition-colors">
      <Facebook class="w-5 h-5 text-white" />
    </a>
  
    <a href="#"
      class="flex items-center justify-center border w-10 h-10 rounded-full bg-white/10 hover:bg-blue-400 transition-colors">
      <Twitter class="w-5 h-5 text-white" />
    </a>
  
    <a href="#"
      class="flex items-center justify-center border w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 transition-colors">
      <Youtube class="w-5 h-5 text-white" />
    </a>
  
    <a href="#"
      class="flex items-center justify-center border w-10 h-10 rounded-full bg-white/10 hover:bg-green-400 transition-colors">
      <Mail class="w-5 h-5 text-white" />
    </a>
  </div>
  

  <!-- Logo -->
  <div class="mb-4">
    <img src={logo} alt="Logo" class="mx-auto h-24 w-24" />
  </div>

  <!-- Title -->
  <div id="footer-title" class="text-3xl md:text-5xl mb-2 text-[#AEA17E]">
    WELLBEING~SVASTI
  </div>

  <!-- Copyright -->
  <div class="text-sm mb-2">
    © 2025 Rutger Kortenhorst. All Rights Reserved | Design and Developed by
  </div>

  <!-- Developer Credit -->
  <div>
    <a href="#" class="text-blue-400 hover:underline">Burning Desire Inclusive</a>
  </div>
</footer>

