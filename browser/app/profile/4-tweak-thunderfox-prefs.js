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

pref("browser.startup.page", 3);
pref("browser.tabs.closeWindowWithLastTab", false);
pref("browser.tabs.warnOnClose", true);

pref("browser.urlbar.trimURLs", false);

pref("gfx.webrender.all", true);
