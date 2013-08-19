/*!
GPII Sample MatchMaker Tests

Copyright 2013 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

// Declare dependencies
/*global require, fluid, jqUnit, gpii, start*/

var fluid = fluid || require("universal");
var gpii = fluid.registerNamespace("gpii");

(function () {
    "use strict";

    fluid.registerNamespace("gpii.tests.sampleMatchMaker");

    var magnifier = {
        "settingsHandlers": [{
            "type": "gpii.integrationTesting.mockSettingsHandler",
            "capabilities": ["display.screenEnhancement"],
            "capabilitiesTransformations": {
                "mag-factor": "display.screenEnhancement.magnification",
                "show-cross-hairs": "display.screenEnhancement.-provisional-showCrosshairs",
                "mouse-tracking": {
                    "expander": {
                        "type": "fluid.model.transform.valueMapper",
                        "inputPath": "display.screenEnhancement.tracking",
                        "options": {
                            "mouse": {
                                "outputValue": "centered"
                            }
                        }
                    }
                }
            }
        }]
    };

    var lesserMagnifier = {
        "settingsHandlers": [{
            "type": "gpii.integrationTesting.mockSettingsHandler",
            "capabilitiesTransformations": {
                "mag-factor": "display.screenEnhancement.magnification"
            }
        }, {
            "type": "gpii.integrationTesting.mockSettingsHandler",
            "capabilities": "display.screenEnhancement.magnification"
        }]
    };

    var sammyProfile = {
        "display": {
            "screenEnhancement": {
                "fontSize": 24,
                "foregroundColor": "white",
                "backgroundColor": "black",
                "fontFace": {
                    "fontName": ["Comic Sans"],
                    "genericFontFace": "sans serif"
                },
                "magnification": 2.0,
                "tracking": "mouse",
                "invertImages": true,
                "-provisional-showCrosshairs": true
            }
        }
    };

    jqUnit.module("MatchMaker");

    jqUnit.test("Dispose solutions", function() {
        matchMaker.disposeSolutions(sammyProfile,
            [lesserMagnifier, magnifier],
            gpii.matchMaker.sample.disposeStrategy).then(function (disposed) {
                fluid.each(disposed, function (solrec) {
                    jqUnit.assertDeepEq("Disposed solutions", "accept", solrec.disposition);
                });
            });
    });

}());
