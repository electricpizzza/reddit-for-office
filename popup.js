let officeMode = document.getElementById("officeMode");
console.log(officeMode);
chrome.storage.sync.get("hiden", ({ hiden }) => {
  officeMode.checked = hiden;
  console.log(hiden);
});
$(officeMode).change(async (e) => {
  e.preventDefault();
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: togglePageState(e.target),
  });
});
officeMode.addEventListener("click", async (e) => {});

// The body of this function will be execuetd as a content script inside the
// current page
function togglePageState(target) {
  console.log(document.body);
  chrome.storage.sync.get("hiden", ({ hiden }) => {
    chrome.storage.sync.set({ hiden: target.checked });
    // chrome.storage.sync.get("hiden", ({ hiden }) => {
    //   const subTitle = document.getElementsByClassName("MSTY2ZpsdupobywLEfx9u");
    //   const banner = document.getElementsByClassName("_2L5G9B5yaoqW3IegiYN-FL");
    //   console.log(document.body);
    //   $(subTitle).toggle(hiden);
    //   $(banner).toggle(hiden);
    // });
  });
}
