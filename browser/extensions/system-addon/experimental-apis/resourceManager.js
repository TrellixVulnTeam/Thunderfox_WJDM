/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

/* global ExtensionAPI, ExtensionCommon, Services, XPCOMUtils */

this.resourceManager = class extends ExtensionAPI {
  getAPI(context) {
    return {
      resourceManager: {
        async regist(uri) {
          let protocolHandler = Services.io.getProtocolHandler("resource").QueryInterface(Ci.nsIResProtocolHandler);
          let uriObj = Services.io.newURI(uri);
          protocolHandler.setSubstitution("thunderfox", uriObj);
        },
      },
    };
  }
};
