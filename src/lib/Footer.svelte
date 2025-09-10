<script>
    import logo from '$lib/assets/logo.png'; // Your logo image path
    import { Facebook, Twitter, Youtube, Mail } from 'lucide-svelte';
</script>

<footer class="bg-green-900 text-gray-200 py-8 text-center">
    <!-- Social Media Section -->
    <div class="flex justify-center items-center gap-4 mb-4">
        <span class="text-sm">Connect</span>
        <a href="#"><Facebook class="w-6 h-6 hover:text-blue-500" /></a>
        <a href="#"><Twitter class="w-6 h-6 hover:text-blue-400" /></a>
        <a href="#"><Youtube class="w-6 h-6 hover:text-red-600" /></a>
        <a href="#"><Mail class="w-6 h-6 hover:text-green-400" /></a>
    </div>

    <!-- Logo -->
    <div class="mb-4">
        <img src={logo} alt="Logo" class="mx-auto h-20 w-42" />
    </div>

    <!-- Title -->
    <div class="text-4xl font-serif mb-2">
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
