<script>
    import headerImage from "$lib/assets/gita_banner.png";
    import bookImage from "$lib/assets/gita_open.png";
    import chapterImage from "$lib/assets/gita_book.jpg";
    import ChapterDetails from "./ChapterDetails.svelte";
    import background from '$lib/assets/background.jpg'; 
    const chapters = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 
    ];

    let selectedChapter = null;

    const selectChapter = (ch) => {
        selectedChapter = ch;
    };

    const goBack = () => {
        selectedChapter = null;
    };
</script>


<div class="pb-10 bg-cover bg-center bg-no-repeat" style="background-image: url({background});">
    <div class="relative">
        <section
            class="relative w-full h-96 bg-cover bg-center flex justify-center"
            style="background-image: url({headerImage});"
        >
            <!-- Semi-transparent strip -->
            <div class="absolute top-10 left-0 w-full h-30 bg-amber-50/70 transform -translate-y-1/2"></div>

            <!-- Title -->
            <h1 class="relative z-10 text-5xl md:text-8xl text-[#16260b] tracking-wide drop-shadow-lg">
                BHAGAVAD GITA
            </h1>
        </section>

        <!-- Book Image floating above the header -->
        <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <img src={bookImage} alt="Book" class="h-56 w-56" />
        </div>
    </div>

    <!-- Gita Chapters Title -->
    <div class="text-center pt-32 pb-24">
        <h2 class="text-2xl md:text-3xl text-red-700">GITA CHAPTERS</h2>
        <div class="w-20 mx-auto h-1 bg-red-700 mt-3"></div>
    </div>

    <!-- Chapters Row -->
    {#if selectedChapter === null}
        <div class="flex justify-center flex-wrap gap-24 mt-8 mx-12">
            {#each chapters as ch}
                <button
                    class="relative w-40 h-40 transform rotate-45 border border-gray-400 bg-white shadow-md overflow-hidden hover:scale-105 transition-transform cursor-pointer rounded-xl"
                    on:click={() => selectChapter(ch)}
                >
                    <!-- Image upright inside diamond -->
                    <img
                        src={chapterImage}
                        alt="Chapter {ch}"
                        class="absolute inset-0 w-full h-full object-cover transform -rotate-45 scale-125"
                    />

                    <!-- Dark semi-transparent strip -->
                    <div class="absolute top-1/2 left-1/2 w-[160%] h-10 bg-black/60 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 -rotate-45">
                        <span class="text-white text-2xl font-normal">{ch}</span>
                    </div>
                </button>
            {/each}
        </div>
    {:else}
        <div class="text-center">
            <ChapterDetails chapterNumber={selectedChapter} on:goBack={goBack} />
        </div>
    {/if}
</div>


<style>
    .text-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    }
</style>
