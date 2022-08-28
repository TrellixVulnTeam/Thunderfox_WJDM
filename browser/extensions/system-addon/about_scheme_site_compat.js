{
    let callback = function() {
        // =======================================
        // Dark Reader
        // =======================================
        let elem = document.querySelector(".darkreader");
        if (elem !== null) {
            elem.remove();
        }
        // =======================================
    }

    const config = { attributes: true, childList: true, subtree: true };

    const targetNode = document.documentElement;

    const observer = new MutationObserver(callback);

    observer.observe(targetNode, config);

    callback();
}
