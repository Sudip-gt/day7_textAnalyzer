

function analyzeText(str){
    const st = document.getElementById("text").value
    const substring = document.getElementById("substring").value;
    console.log(st);
    console.log(substring);

    // word count by removing leading and trailing spaces
    const words = st.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    // Character counts with and without spaces
    const charCount = st.length;
    const charCountWithoutSpaces = st.replace(/\s/g, "").length;

    // Sentence count
    const sentences = st.split(/[.?]/);
    const sentenceCount = sentences.length - 1;

    // Occurrences of "substring"
    
    const substringCount = st.split(substring).length - 1;

    console.log("Word count:",wordCount);
    console.log("Character count:",charCount);
    console.log("Character count without spaces:",charCountWithoutSpaces);
    console.log("Sentence count:",sentenceCount);
    console.log(`Occurrences of ${substring}:`, substringCount);


    document.getElementById("wordCount").textContent = wordCount;
    document.getElementById("charCount").textContent = charCount;
    document.getElementById("charCounts").textContent = charCountWithoutSpaces;
    document.getElementById("sentenceCount").textContent = sentenceCount;
    document.getElementById("substringName").textContent = `Occurrences of "${substring}":${substringCount}`;
}
