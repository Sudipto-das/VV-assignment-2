<script>
    
    import headerImage from "$lib/assets/gita_banner.png";
    import bookImage from "$lib/assets/gita_open.png";
    import chapterImage from "$lib/assets/gita_book.jpg";
    import ChapterDetails from "./ChapterDetails.svelte";
    const chapters = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23,
    ];

    let selectedChapter = null

    const selectChapter = (ch)=>{
        selectedChapter = ch
    }

    const goBack = ()=>{
        selectedChapter = null
    }

   
</script>

<!-- Header Section -->
<div class="mb-10">
    <div class="mb-10 relative">
        <section
        class="relative w-full h-96 bg-cover bg-center flex justify-center "
        style="background-image: url({headerImage});"
      >
        <!-- Semi-transparent strip -->
        <div class="absolute top-10 left-0 w-full h-20 bg-amber-50/70 transform -translate-y-1/2"></div>
      
        <!-- Title -->
        <h1
          class="relative z-10 font-[Cinzel_Decorative] text-4xl md:text-7xl text-green-900 tracking-wide drop-shadow-lg"
        >
          BHAGAVAD GITA
        </h1>
      </section>
      

        <!-- Book Image floating above the header -->
        <div
            class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        >
            <img src={bookImage} alt="Book" class="h-56 w-56" />
        </div>
    </div>

    <!-- Gita Chapters Title -->
    <div class="text-center mt-24">
        <h2 class="text-3xl text-red-700">GITA CHAPTERS</h2>
        <div class="w-20 mx-auto h-1 bg-red-700 mt-2"></div>
    </div>

    <!-- Chapters Row -->
    {#if selectedChapter === null} 
    <div class="flex justify-center flex-wrap gap-20 mt-8 px-4">
        
        {#each chapters as ch}
            <button
                class="relative w-36 h-36 transform rotate-45 bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                on:click={()=>selectChapter(ch)}
            >
                <!-- Image rotated back to look upright -->
                <img
                    src={chapterImage}
                    alt="Chapter {ch}"
                    class="w-full h-full object-cover transform -rotate-45"
                />

                <!-- Semi-transparent band aligned at center -->
                <div
                    class="w-full -rotate-45 absolute left-1/2 top-1/2 bg-gray-700 opacity-50 text-white text-lg font-bold text-center py-1 rounded-md transform -translate-x-1/2 -translate-y-1/2"
                >
                    {ch}
                </div>
            </button>
        {/each}
    </div>
    {:else}
    <!-- Show Chapter Details -->
    <div class="text-center">
        
        <ChapterDetails  chapterNumber={selectedChapter} on:goBack={goBack}/>
    </div>
    {/if}
</div>


<style>
    .text-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    }
</style>
