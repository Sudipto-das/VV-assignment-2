<script>
    import Icon from "$lib/assets/logo.png";
    import { Search } from "lucide-svelte"; // search icon

    let showAyurveda = false;
    let showYoga = false;
    let mobileMenuOpen = false;

    const toggleAyurveda = () => (showAyurveda = !showAyurveda);
    const toggleYoga = () => (showYoga = !showYoga);
    const toggleMobileMenu = () => (mobileMenuOpen = !mobileMenuOpen);
</script>

<!-- Navbar -->
<nav class="flex items-center justify-between px-6 py-6 bg-white shadow-md relative font-[Lato]">
    <!-- Logo -->
    <div class="flex items-center space-x-3">
        <img src={Icon} alt="Logo" class="h-10 w-28" />
       
    </div>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex items-center space-x-6 text-gray-700 font-medium text-sm">
        <li class="relative">
            <div class="flex gap-4">
            <Search class="w-5 h-5 text-gray-600 md:ml-6 cursor-pointer" />
            <button on:click={toggleAyurveda} class="hover:text-black">ĀYURVEDA ▾</button>
        </div>
            {#if showAyurveda}
                <ul class="absolute mt-2 bg-white border rounded shadow-lg w-48">
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Introduction</li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Herbs</li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Treatments</li>
                </ul>
            {/if}
        </li>
        <li class="relative">
            <button on:click={toggleYoga} class="hover:text-black">YOGASŪTRAS ▾</button>
            {#if showYoga}
                <ul class="absolute mt-2 bg-white border rounded shadow-lg w-48">
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Chapter 1</li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Chapter 2</li>
                </ul>
            {/if}
        </li>
        <li><a href="#" class="hover:text-black">BHAGAVAD GĪTĀ</a></li>
        <li><a href="#" class="hover:text-black">UPANIṢADS</a></li>
        <li><a href="#" class="hover:text-black">SANSKRIT</a></li>
        <li><a href="#" class="hover:text-black">CONTACT US</a></li>
    </ul>

    <!-- Mobile Hamburger -->
    <button class="md:hidden text-gray-600 hover:text-gray-800 text-2xl" on:click={toggleMobileMenu}>
        ☰
    </button>
</nav>

<!-- Mobile Menu (push content down instead of overlay) -->
<div
    class={`overflow-hidden transition-all duration-300 md:hidden   ${
        mobileMenuOpen ? "max-h-[600px]" : "max-h-0"
    }`}
>
    <ul class="flex flex-col text-gray-700 font-normal bg-white shadow-md text-[0.75rem] mb-2">
        <li class="">
            <button on:click={toggleAyurveda} class="w-full text-center px-4 py-3 hover:bg-gray-100">
                ĀYURVEDA ▾
            </button>
            {#if showAyurveda}
                <ul class="bg-gray-50 ">
                    <li class="px-6 py-2 hover:bg-gray-100 cursor-pointer">Introduction</li>
                    <li class="px-6 py-2 hover:bg-gray-100 cursor-pointer">Herbs</li>
                    <li class="px-6 py-2 hover:bg-gray-100 cursor-pointer">Treatments</li>
                </ul>
            {/if}
        </li>

        <li class="">
            <button on:click={toggleYoga} class="w-full text-center px-4 py-3 hover:bg-gray-100">
                YOGASŪTRAS ▾
            </button>
            {#if showYoga}
                <ul class="bg-gray-50 ">
                    <li class="px-6 py-2 hover:bg-gray-100 cursor-pointer">Chapter 1</li>
                    <li class="px-6 py-2 hover:bg-gray-100 cursor-pointer">Chapter 2</li>
                </ul>
            {/if}
        </li>

        <li><a href="#" class=" text-center block px-4 py-3 hover:bg-gray-100">BHAGAVAD GĪTĀ</a></li>
        <li><a href="#" class="text-center block px-4 py-3 hover:bg-gray-100">UPANIṢADS</a></li>
        <li><a href="#" class="text-center block px-4 py-3 hover:bg-gray-100">SANSKRIT</a></li>
        <li><a href="#" class="text-center block px-4 py-3 hover:bg-gray-100">CONTACT US</a></li>
    </ul>
</div>

<style>
    nav {
        z-index: 50;
    }
</style>
