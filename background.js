chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete") return;

  chrome.storage.local.get(["focusMode"], () => {

    const blockedSites = [
      "facebook.com",
      "instagram.com",
      "tiktok.com",
      "snapchat.com",
      "twitter.com",
      "x.com"
    ];

    if (!tab.url) return;

    // Check if the site is in blocked list
    if (blockedSites.some(site => tab.url.includes(site))) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: () => {
          alert("⚠️ You are distracted!\nThis site is blocked during focus mode.");
        }
      }, () => {
        // After OK is pressed → close the tab
        chrome.tabs.remove(tabId);
      });
    }
  });
});
