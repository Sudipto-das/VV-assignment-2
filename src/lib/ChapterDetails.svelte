<script>
    import { fetchChapter } from "$lib/api/gita.js";
    import VerseModal from "./VerseModal.svelte";
    import { createEventDispatcher, onMount } from "svelte";
    import chapter from "$lib/assets/sletter.png";
    export let chapterNumber;
    let showModal = false;
    let selectedVerse = null;
    const dispatch = createEventDispatcher();

    const back = () => {
        dispatch("goBack");
    };

    const openVerse = (verse) => {
        selectedVerse = verse;
        showModal = true;
    };
    const closeModal = () => {
        showModal = false;
        selectedVerse = null;
    };

    // Verse data
    let verses = [];
    let loading = true;
    let error = null;
    onMount(async () => {
        try {
            loading = true;
            verses = await fetchChapter(chapterNumber);
            console.log(verses);
        } catch (err) {
            error = err.message;
        } finally {
            loading = false;
        }
    });
</script>

<div class="p-4 sm:p-6 bg-transparent min-h-screen">
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
    <!-- Grid of verses -->
    <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
    >
        {#each verses as verse}
            <div
                class="relative w-24 h-40 sm:w-32 sm:h-44 md:w-42 md:h-48 bg-cover bg-center flex flex-col items-center justify-center text-center cursor-pointer"
                style="background-image: url({chapter});"
                on:click={() => openVerse(verse)}
            >
                <!-- Verse Label / Number -->
                <span
                    class="text-slate-50 text-sm sm:text-base md:text-xl font-semibold drop-shadow-lg"
                >
                    {#if verse.number === "0"}
                        Whole <br /> Chapter
                    {:else}
                        {verse.number}
                    {/if}
                </span>

                <!-- Play Button -->
                <button
                    class="absolute bottom-3 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 text-black hover:bg-red-500 hover:text-white transition shadow-md"
                >
                    ▶
                </button>
            </div>
        {/each}
    </div>
</div>
<!-- Modal -->
<VerseModal show={showModal} verse={selectedVerse} on:close={closeModal} />
