<script>
    import { createEventDispatcher } from "svelte";
    export let show = false;
    export let verse = null; // verse object passed in

    const dispatch = createEventDispatcher();
    const close = () => dispatch("close");
</script>

{#if show}
    <div class="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div class="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <!-- Close Button -->
            <button
                class="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
                on:click={close}
            >
                ✕
            </button>

            <!-- Verse Content -->
            <h2 class="text-xl font-bold text-red-600 mb-3">
                Verse {verse?.label}
            </h2>
            <p class="text-gray-700 leading-relaxed">
                {verse?.content || "This is the verse content. You can replace with actual text/data."}
            </p>
        </div>
    </div>
{/if}
