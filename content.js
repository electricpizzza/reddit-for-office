const subTitle = document.getElementsByClassName("MSTY2ZpsdupobywLEfx9u");
const banner = document.getElementsByClassName("_2L5G9B5yaoqW3IegiYN-FL");
// $(subTitle).hide();
// $(banner).hide();
chrome.storage.sync.get("hiden", ({ hiden }) => {
  $(subTitle).toggle(!hiden);
  $(banner).toggle(!hiden);
});
$(
  "._10K5i7NW6qcm-UoCtpB3aK _3LwUIE7yX7CZQKmD2L87vf._1F02c6Yw0dfhdWwl99UrYn._1fiOgAxLiYfEU41C1NOX9B._1IKtbRloF_LV1hPqMzP3MC"
).click();
