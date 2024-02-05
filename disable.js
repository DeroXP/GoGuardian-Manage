const extensionsToDisable = ["haldlgldplgnggkjaafhelgiaglafanh", "ihjgnoifhnilgbjicdpingfgjhjeffij", "kmpjlilnemjciohjckjadmgmicoldglf", "ifeifkfohlobcbhmlfkenopaimbmnahb", "jaoebcikabjppaclpgbodmmnfjihdngk", "kbohafcopfpigkjdimdcdgenlhkmhbnc", "gcjpefhffmcgplgklffgbebganmhffje", "lgcbihdlknkcmmnapfocjbkdefkhmolo"];

function disableExtension(extensionId, callback) {
  chrome.management.setEnabled(extensionId, false, () => {
    // Extension is now disabled
    if (callback && typeof callback === 'function') {
      callback(extensionId);
    }
  });
}

extensionsToDisable.forEach(extensionId => {
  disableExtension(extensionId, (disabledExtensionId) => {
    alert(`Extension ${disabledExtensionId} is now disabled.`);
  });
});

alert(`Success!!`);
