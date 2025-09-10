<script>
    import VerseModal from "./VerseModal.svelte";
    import { createEventDispatcher } from "svelte";
    import chapter from "$lib/assets/bhagavad-gita-chapter-1.jpg";
    export let chapterNumber;
    let showModal = false
    let selectedVerse = null;
    const dispatch = createEventDispatcher();

    const back = () => {
        dispatch("goBack");
    };

    const openVerse = (verse) =>{
        selectedVerse = verse;
        showModal = true
    }
    const closeModal = () =>{
        showModal = false
        selectedVerse = null
    }

    // Verse data
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

<div
    class="p-4 sm:p-6 bg-gradient-to-b from-yellow-50 to-amber-100 min-h-screen"
>
    <!-- Header Row -->
    <div class="flex items-center justify-between mb-6">
        <!-- Back Button (left) -->
        <button
            on:click={back}
            class="text-red-600 font-medium hover:underline text-sm sm:text-base"
        >
            ← Back
        </button>

        <!-- Chapter Title (center) -->
        <h2
            class="text-lg sm:text-2xl font-bold text-red-700 uppercase tracking-wide text-center flex-1"
        >
            Chapter {chapterNumber}
        </h2>

        <!-- Spacer -->
        <div class="w-10 sm:w-16"></div>
    </div>

    <!-- Verse heading -->
    <div
        class="text-red-500 border-t border-b border-red-400 text-xs sm:text-sm py-1 mt-4 mb-6 text-center"
    >
        Verse
    </div>

    <!-- Grid of verses -->
    <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 justify-items-center"
    >
        {#each verses as verse}
            <div
                class="relative w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 bg-cover bg-center flex flex-col justify-center items-center text-center rounded-md shadow-md"
                style="background-image: url({chapter});"
                on:click={() => openVerse(verse)}
            >
                <span
                    class="text-white font-semibold text-xs sm:text-sm md:text-base drop-shadow-md px-1"
                >
                    {verse.label}
                </span>

                <!-- Play button -->
                <button
                    class="absolute bottom-2 bg-white/80 rounded-full px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm hover:bg-red-500 hover:text-white transition"
                >
                    ▶
                </button>
            </div>
        {/each}
    </div>
</div>
<!-- Modal -->
<VerseModal show={showModal} verse={selectedVerse} on:close={closeModal} />
