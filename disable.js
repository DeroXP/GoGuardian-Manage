chrome.runtime.sendMessage({action: 'hideTab'}, function(response) {
    alert('Success!!');
});
