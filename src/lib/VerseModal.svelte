<script>
    import { createEventDispatcher } from "svelte";
    export let show = false;
    export let verse = null; // full verse object

    const dispatch = createEventDispatcher();
    const close = () => dispatch("close");
    
</script>

{#if show && verse}
    <div class="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div class="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
            
            <!-- Close Button -->
            <button
                class="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
                on:click={close}
            >
                ✕
            </button>

            <!-- Verse Header -->
            <h2 class="text-xl font-bold text-red-600 mb-3">
                Chapter {verse.chapter_no} — Verse {verse.shlok_no}
            </h2>

            <!-- Verse Content (HTML from API) -->
            <div class="text-gray-700 prose max-w-none leading-relaxed">
                {@html verse.lyrics}
            </div>

            <!-- Audio (if available) -->
            {#if verse.music}
                <audio controls class="mt-4 w-full">
                    <source src={"https://sanskrit.ie/" + verse.music} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                </audio>
            {/if}
        </div>
    </div>
{/if}
