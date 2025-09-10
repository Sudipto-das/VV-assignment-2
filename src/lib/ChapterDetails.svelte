<script>
    import { createEventDispatcher } from "svelte";
    import chapter from "$lib/assets/bhagavad-gita-chapter-1.jpg";
    export let chapterNumber;

    const dispatch = createEventDispatcher();

    const back = () => {
        dispatch("goBack");
    };

    // Verse data (you can extend this as needed)
    let verses = [
        { id: "whole", label: "Whole Chapter" },
        { id: 1, label: "1" },
        { id: 2, label: "2" },
        { id: 3, label: "3" },
        { id: 4, label: "4" },
        { id: 5, label: "5" },
        { id: 6, label: "6" },
        { id: 7, label: "7" },
        { id: 8, label: "8" },
        { id: 9, label: "9" },
        { id: 10, label: "10" },
        { id: 11, label: "11" },
        { id: 12, label: "12" },
        { id: 13, label: "13" },
        { id: 14, label: "14" },
    ];
</script>

<div class="p-6 bg-gradient-to-b from-yellow-50 to-amber-100 min-h-screen">
   <!-- Header Row -->
<div class="flex items-center justify-between mb-6">
    <!-- Back Button (left) -->
    <button 
        on:click={back} 
        class="text-blue-600 hover:underline"
    >
        ← Back
    </button>

    <!-- Chapter Title (center) -->
    <h2 class="text-2xl font-bold text-red-700 uppercase tracking-wide">
        Chapter {chapterNumber}
    </h2>

    <!-- Empty spacer (right) to balance flex -->
    <div class="w-16"></div>
</div>


    <!-- Verse heading -->
    <div
        class="text-red-500 border-t border-b border-red-400 text-sm py-1 mt-4 mb-6"
    >
        Verse
    </div>

    <!-- Grid of verses -->
    <div class="grid grid-cols-5 gap-6 justify-items-center">
        {#each verses as verse}
            <div
                class="relative w-28 h-36 bg-cover bg-center flex flex-col justify-center items-center text-center"
                style="background-image: url({chapter});"
            >
                <span
                    class="text-white font-semibold text-sm drop-shadow-md px-1"
                >
                    {verse.label}
                </span>

                <!-- Play button -->
                <button
                    class="absolute bottom-2 bg-white/80 rounded-full px-3 py-2 hover:bg-red-500 hover:text-white transition"
                >
                    ▶
                </button>
            </div>
        {/each}
    </div>
</div>
