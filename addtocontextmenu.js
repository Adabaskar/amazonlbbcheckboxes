browser.contextMenus.create({
  id: "amazon-lbb-add-checkboxes",
  title: "Amazon/LBB: Add Checkboxes"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "amazon-lbb-add-checkboxes") {     
    browser.tabs.executeScript({
      file: "checkableaccountstatements.js"
    });
  }
});