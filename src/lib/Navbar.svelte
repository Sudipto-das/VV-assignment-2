<script>
    import Icon from "$lib/assets/logo.png"
    let showAyurveda = false;
    let showYoga = false;

    const toggleAyurveda = () => showAyurveda = !showAyurveda;
    const toggleYoga = () => showYoga = !showYoga;
</script>

<nav class="flex items-center justify-between px-6 py-4 bg-white shadow-md">
    <!-- Logo -->
    <div class="flex items-center space-x-4">
        <img src={Icon} alt="Logo" class="h-10 w-28" />
    </div>

    <!-- Search Icon -->
    <div>
        <button class="text-gray-600 hover:text-gray-800">
            🔍
        </button>
    </div>

    <!-- Menu Items -->
    <ul class="flex items-center space-x-6 text-gray-700 font-medium">
        <li class="relative">
            <button on:click={toggleAyurveda} class="hover:text-black">ĀYURVEDA ▾</button>
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
</nav>

<style>
    /* Ensure dropdowns appear above other content */
    ul li ul {
        z-index: 10;
    }
</style>
