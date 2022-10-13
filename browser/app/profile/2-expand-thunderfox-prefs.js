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

pref("svg.context-properties.content.enabled", true);
pref("layout.css.backdrop-filter.enabled", true);
pref("layout.css.color-mix.enabled", true);

pref("privacy.userContext.enabled", true);
pref("privacy.userContext.ui.enabled", true);

pref("browser.urlbar.update2.engineAliasRefresh", true);
pref("browser.search.separatePrivateDefault.ui.enabled", true);
pref("xpinstall.signatures.required", false);
pref("extensions.webextensions.restrictedDomains", "");
pref("xpinstall.userActivation.required", false);
pref("extensions.install_origins.enabled", false);
pref("browser.theme.colorway-closet", true);
pref("widget.disable-swipe-tracker", false);
pref("extensions.backgroundServiceWorker.enabled", true);
pref("extensions.manifestV3.enabled", true);

#ifdef XP_WIN
  pref("alerts.useSystemBackend", true);
  pref("alerts.useSystemBackend.windows.notificationserver.enabled", true);
#endif // XP_WIN
