let hiden = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ hiden });
});
