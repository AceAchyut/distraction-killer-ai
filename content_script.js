const keywords = ["reel", "shorts", "meme", "trending", "viral"];

const pageText = document.body.innerText.toLowerCase();

for (let word of keywords) {
  if (pageText.includes(word)) {
    alert("⚠️ Distraction detected! Stay focused on your goal.");
    break;
  }
}
