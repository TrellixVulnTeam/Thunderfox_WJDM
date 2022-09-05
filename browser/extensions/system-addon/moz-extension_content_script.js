const window_ = window.wrappedJSObject.window;
const browser_ = window.wrappedJSObject.browser;

/*
(async() => {
    let result = await window_.fetch(browser_.runtime.getURL("manifest.json"));
    let text = await result.text();
    console.log(text);
})();
*/

// Since it is not a tab, sendMessage cannot be used, so the storage API is used.
