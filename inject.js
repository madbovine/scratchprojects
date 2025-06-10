(async function () {
  function waitForScratchVM() {
    return new Promise(resolve => {
      function check() {
        if (window.vm && window.vm.extensionManager && window.ScratchBlocks) {
          resolve();
        } else {
          setTimeout(check, 500);
        }
      }
      check();
    });
  }

  await waitForScratchVM();

  // Load the service logic
  const serviceScript = document.createElement('script');
  serviceScript.src = chrome.runtime.getURL('customFlagService.js');
  serviceScript.onload = () => serviceScript.remove();
  (document.head || document.documentElement).appendChild(serviceScript);
})();

