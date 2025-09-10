<script>
    import Icon from "$lib/assets/logo.png";

    let showAyurveda = false;
    let showYoga = false;
    let mobileMenuOpen = false;

    const toggleAyurveda = () => (showAyurveda = !showAyurveda);
    const toggleYoga = () => (showYoga = !showYoga);
    const toggleMobileMenu = () => (mobileMenuOpen = !mobileMenuOpen);
</script>

<!-- Navbar -->
<nav class="flex items-center justify-between px-6 py-4 bg-white shadow-md relative">
    <!-- Logo -->
    <div class="flex items-center space-x-4">
        <img src={Icon} alt="Logo" class="h-10 w-28" />
    </div>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
        <li class="relative">
            <button on:click={toggleAyurveda} class="hover:text-black">
                ĀYURVEDA ▾
            </button>
            {#if showAyurveda}
                <ul class="absolute mt-2 bg-white border rounded shadow-lg w-48">
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Introduction</li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Herbs</li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Treatments</li>
                </ul>
            {/if}
        </li>

        <li class="relative">
            <button on:click={toggleYoga} class="hover:text-black">
                YOGASŪTRAS ▾
            </button>
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

    <!-- Mobile Hamburger Icon -->
    <button
        class="md:hidden text-gray-600 hover:text-gray-800 text-2xl"
        on:click={toggleMobileMenu}
    >
        ☰
    </button>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
        <div class="absolute top-full left-0 w-full bg-white shadow-md border-t md:hidden">
            <ul class="flex flex-col text-gray-700 font-medium">
                <li class="relative border-b">
                    <button on:click={toggleAyurveda} class="w-full text-left px-4 py-3 hover:bg-gray-100">
                        ĀYURVEDA ▾
                    </button>
                    {#if showAyurveda}
                        <ul class="bg-gray-50 border-t">
                            <li class="px-6 py-2 hover:bg-gray-100 cursor-pointer">Introduction</li>
                            <li class="px-6 py-2 hover:bg-gray-100 cursor-pointer">Herbs</li>
                            <li class="px-6 py-2 hover:bg-gray-100 cursor-pointer">Treatments</li>
                        </ul>
                    {/if}
                </li>

                <li class="relative border-b">
                    <button on:click={toggleYoga} class="w-full text-left px-4 py-3 hover:bg-gray-100">
                        YOGASŪTRAS ▾
                    </button>
                    {#if showYoga}
                        <ul class="bg-gray-50 border-t">
                            <li class="px-6 py-2 hover:bg-gray-100 cursor-pointer">Chapter 1</li>
                            <li class="px-6 py-2 hover:bg-gray-100 cursor-pointer">Chapter 2</li>
                        </ul>
                    {/if}
                </li>

                <li><a href="#" class="block px-4 py-3 hover:bg-gray-100">BHAGAVAD GĪTĀ</a></li>
                <li><a href="#" class="block px-4 py-3 hover:bg-gray-100">UPANIṢADS</a></li>
                <li><a href="#" class="block px-4 py-3 hover:bg-gray-100">SANSKRIT</a></li>
                <li><a href="#" class="block px-4 py-3 hover:bg-gray-100">CONTACT US</a></li>
            </ul>
        </div>
    {/if}
</nav>

<style>
    nav {
        z-index: 50; /* keep dropdown above other sections */
    }
</style>
