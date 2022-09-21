{
    const { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");
    const { OS } = ChromeUtils.import("resource://gre/modules/osfile.jsm");
    const { FileUtils } = ChromeUtils.import("resource://gre/modules/FileUtils.jsm");
    let io_service = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);
    let style_sheet_service = Cc["@mozilla.org/content/style-sheet-service;1"].getService(Ci.nsIStyleSheetService);

    const CSS_THEMES_ENABLED_PREF = "browser.theme.enabledCSSList";
    const REGISTERED_TYPE = style_sheet_service["AGENT_SHEET"];

    const profileDir = Services.dirsvc.get("ProfD", Ci.nsIFile);
    const userChromeCSS_dir = FileUtils.File(OS.Path.join(profileDir.path, "userChromeCSS"));
    let csses = null;
    let loaded_csses = [];

    let load_dir = function(){
        let dirs = [];
        if (!userChromeCSS_dir.exists()) {
            return dirs;
        }
        let dir_entries = userChromeCSS_dir.directoryEntries;
        while (dir_entries.hasMoreElements()) {
            let dir = dir_entries.getNext().QueryInterface(Ci.nsIFile);
            if (dir.exists() && dir.isDirectory()) {
                dirs.push(dir);
            }
        }
        return dirs;
    }

    let css_info_from_dir = function(dirs){
        let csses = [];
        dirs.forEach(dir => {
            let css_path = OS.Path.join(dir.path, "userChrome.css");
            let css = FileUtils.File(css_path);
            let css_path_url = io_service.newFileURI(css).spec;
            if (css.exists() && css.isFile()) {
                csses.push({
                    "css": css_path_url,
                    "dirname": dir.displayName
                })
            }
        })
        return csses
    }

    let styleSheets = [];

    let listener = {
        onOpenWindow(aXulWin) {
            aXulWin.docShell.domWindow.addEventListener("DOMContentLoaded", function(){
                for (loaded_css of loaded_csses) {
                    load_css(loaded_css.css, loaded_css.dirname);
                }
            })
        },
    }

    let loadStyleSheet = function(window_, url, id) {
        let matches = styleSheets.filter(styleSheet => {
            return Boolean(styleSheet.data.match(new RegExp(`userstylesheetid="${id}"`)));
        });
        for (let match of matches) {
            if (window_.document.contains(match)) {
                return;
            }
        }
        const styleSheet = window_.document.createProcessingInstruction(
            "xml-stylesheet",
            `href="${url}" type="text/css" userstylesheetid="${id}"`
        );
        window_.document.insertBefore(styleSheet, window_.document.documentElement);
        styleSheets.push(styleSheet);
    }

    let load_css = function(url, id) {
        Services.wm.removeListener(listener);
        let windows = Services.wm.getEnumerator("");
        for (let window_ of windows) {
            loadStyleSheet(window_, url, id);
        }
        Services.wm.addListener(listener);
    }

    let unload_css = function() {
        Services.wm.removeListener(listener);
        for (let styleSheet of styleSheets) {
            try {
                styleSheet.remove();
            } catch (e) {}
        }
    }

    let pref_load = function(){
        loaded_csses = [];
        unload_css();
        let pref = Services.prefs.getStringPref(CSS_THEMES_ENABLED_PREF, "[]");
        let list;
        try {
            list = JSON.parse(pref);
        } catch (e) {
            return;
        }
        list.forEach(dirname => {
            let csses_match = csses.filter(css => css.dirname === dirname);
            if (csses_match && csses_match.length === 1) {
                load_css(csses_match[0].css, csses_match[0].dirname);
                loaded_csses.push(csses_match[0]);
            } else if (csses_match.length > 1){
                console.log("why???????");
            }
        })
    }

    {
        let dirs = load_dir();
        csses = css_info_from_dir(dirs);
        pref_load();
        Services.prefs.addObserver(CSS_THEMES_ENABLED_PREF, function(){
            let dirs = load_dir();
            csses = css_info_from_dir(dirs);
            pref_load();
        })
    }
}
