#filter dumbComments emptyLines substitution

// -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Non-static prefs that are specific to desktop Firefox belong in this file
// (unless there is a compelling and documented reason for them to belong in
// another file).
//
// Please indent all prefs defined within #ifdef/#ifndef conditions. This
// improves readability, particular for conditional blocks that exceed a single
// screen.

#ifdef XP_UNIX
  #ifndef XP_MACOSX
    #define UNIX_BUT_NOT_MAC
  #endif
#endif

pref("app.feedback.baseURL", "https://github.com/typeling1578/Thunderfox/issues");
pref("extensions.getAddons.discovery.api_url", "https://addons.mozilla.org/api/v4/accounts/account/17138352/collections/Add-ons-for-Thunderfox/addons/?sort=-popularity&lang=%LOCALE%");

pref("intl.locale.requested", "");

pref("font.name-list.emoji", "Twemoji Mozilla");
pref("browser.preferences.moreFromMozilla", false);

pref("extensions.experiments.enabled", false, locked);
pref("app.update.langpack.enabled", false, locked);
pref("extensions.getAddons.langpacks.url", "", locked);
