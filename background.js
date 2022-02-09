// let hiden = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get("hiden", (hiden) => {
    chrome.storage.sync.set({ hiden: hiden !== null && hiden });
  });
});
