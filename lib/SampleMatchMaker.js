/*!
GPII Sample Matchmaker

Copyright 2013 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

var fluid = fluid || require("universal");

var matchMaker = fluid.registerNamespace("gpii.matchMaker");
var sample = fluid.registerNamespace("gpii.matchMaker.sample");

sample.disposeStrategy = function (leaves, solrecs) {
    // TODO: Match solution records to user preferences.
    return fluid.transform(solrecs, function (solrec) {
        // This strategy accepts all solution records.
        solrec.disposition = "accept";
        return solrec;
    });
};
