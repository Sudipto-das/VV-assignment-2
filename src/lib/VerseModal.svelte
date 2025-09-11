<script>
    import { createEventDispatcher } from "svelte";
    export let show = false;
    export let verse = null; // full verse object

    const dispatch = createEventDispatcher();
    const close = () => dispatch("close");
</script>

{#if show && verse}
    <div class="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
        <!-- Modal Box -->
        <div
            class="relative w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] bg-[#f9d3a8] rounded-2xl shadow-2xl border border-gray-400 overflow-hidden"
        >
            <!-- Close Button -->
            <button
                class="absolute top-2 right-3 text-gray-700 hover:text-black text-2xl font-bold z-10"
                on:click={close}
            >
                ✕
            </button>

           

            <!-- Verse Content -->
            <div
                class="p-6 text-center font-serif leading-relaxed text-[17px] sm:text-lg md:text-xl space-y-3"
            >
                {@html verse.lyrics}
            </div>

            <!-- Audio Section -->
            {#if verse.music}
                <div class="bg-[#3a2b18] px-4 py-3">
                    <audio
                        controls
                        class="w-full rounded-lg bg-[#3a2b18] accent-red-600"
                    >
                        <source
                            src={verse.music}
                            type="audio/mpeg"
                        />
                        Your browser does not support the audio tag.
                    </audio>
                </div>
            {/if}
        </div>
    </div>
{/if}
