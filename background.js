let hiden = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ hiden });
});

const subTitle = document.getElementsByClassName("MSTY2ZpsdupobywLEfx9u");
const banner = document.getElementsByClassName("_2L5G9B5yaoqW3IegiYN-FL");

$(subTitle).hide();
$(banner).hide();
chrome.storage.sync.get("hiden", ({ hiden }) => {
  $(subTitle).toggle(hiden);
  $(banner).toggle(hiden);
});
