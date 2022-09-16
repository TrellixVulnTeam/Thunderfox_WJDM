var Sidebar2UI = {
    show: function(url) {
        let sidebar2_box = document.querySelector("#sidebar2-box");
        let sidebar2_splitter = document.querySelector("#sidebar2-splitter");

        if (url !== undefined) {
            this.setUrl(url);
        }

        sidebar2_box.setAttribute("hidden", "false");
        sidebar2_splitter.setAttribute("hidden", "false");
    },
    hide: function(unload) {
        let sidebar2_box = document.querySelector("#sidebar2-box");
        let sidebar2_splitter = document.querySelector("#sidebar2-splitter");

        if (unload) {
            this.unsetUrl();
        }

        sidebar2_box.setAttribute("hidden", "true");
        sidebar2_splitter.setAttribute("hidden", "true");
    },
    setUrl: function(url) {
        let sidebar2 = document.querySelector("#sidebar2");

        if (url !== undefined) {
            sidebar2.src = url;
        } else {
            sidebar2.src = "about:blank";
        }
    },
    unsetUrl: function() {
        let sidebar2 = document.querySelector("#sidebar2");

        sidebar2.src = "about:blank";
    }
}
