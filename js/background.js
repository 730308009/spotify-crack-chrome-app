chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; }, { urls: [
        "*://*.audio-ak-spotify-com.akamaized.net/*",
        "http://*.scdn.co/*"
    ]}, ["blocking"])