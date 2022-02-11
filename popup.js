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
    function: togglePageState,
  });
});

function togglePageState() {
  chrome.storage.sync.get("hiden", ({ hiden }) => {
    chrome.storage.sync.set({ hiden: !hiden });
    $(".MSTY2ZpsdupobywLEfx9u").toggle(hiden);
    $("._2L5G9B5yaoqW3IegiYN-FL").toggle(hiden);
    $(
      "._10K5i7NW6qcm-UoCtpB3aK _3LwUIE7yX7CZQKmD2L87vf._1F02c6Yw0dfhdWwl99UrYn._1fiOgAxLiYfEU41C1NOX9B._1IKtbRloF_LV1hPqMzP3MC"
    ).click();
  });
}
