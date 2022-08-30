const injects = [
    {
        "matches": [
            "*://www.youtube.com/*",
        ],
        "css": [
            { file: "webcompat/www.youtube.com_win_ja.css" },
        ],
        "matches_os": [
            "win",
        ],
        "matches_languages": [
            "ja",
            "ja-JP",
        ],
    },
];

(async() => {
    const platform = await browser.runtime.getPlatformInfo();
    const languages = await browser.i18n.getAcceptLanguages();

    let match_injects = injects.filter(inject => {
        if (!inject["matches_os"].includes(platform["os"])) {
            return false;
        }
        if (!inject["matches_languages"].includes(languages[0])) {
            return false;
        }
        return true;
    });

    for (let inject of match_injects) {
        await browser.contentScripts.register({
            matches: inject["matches"],
            css: inject["css"] !== undefined ? inject["css"] : undefined,
            js: inject["js"] !== undefined ? inject["js"] : undefined,
            runAt: inject["run_at"] !== undefined ? inject["run_at"] : undefined,
            matchAboutBlank: inject["match_about_blank"] !== undefined ? inject["match_about_blank"] : undefined,
            allFrames: inject["all_frames"] !== undefined ? inject["all_frames"] : undefined,
        })
    }
})();
