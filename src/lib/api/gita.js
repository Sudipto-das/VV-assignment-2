export async function fetchChapter(chapterNumber) {
    try {
        const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(
            `https://sanskrit.ie/api/geeta.php?q=${chapterNumber}`
        )}`;

        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Failed to fetch chapter ${chapterNumber}`);
        }

        const json = await res.json();

        // Get verses array
        const versesArray = Array.isArray(json.data) ? json.data : [];

        return versesArray.map((verse, idx) => ({
            id: verse.geeta_id ?? idx + 1,
            chapter: verse.chapter_no ?? chapterNumber,
            number: verse.shlok_no ?? idx + 1,
            lyrics: verse.lyrics ?? "",
            music: verse.music
                ? `https://sanskrit.ie/${verse.music}`
                : null,
            qr: verse.qr ?? "",
        }));
    } catch (err) {
        console.error("API Error:", err);
        return [];
    }
}
