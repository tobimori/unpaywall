//                                 ____   
//     ___  ___ ___ ___    _____ _/ / /___
//    / _ \/ _ `/ // / |/|/ / _ `/ / / __/
//   / .__/\_,_/\_, /|__,__/\_,_/_/_/_/   
//  /_/        /___/                      
//
//  laterpay blocker component
//  github.com/tobimori/paywallr
//

const laterpayPaywalls = [
    "www.bergedorfer-zeitung.de"
]

const isLaterpay = (details) => { 
    let t;
    // check to enable cross plattform (firefox uses originUrl, chrome uses initiator)
    details.originUrl ? t = new URL(details.originUrl) : t = new URL(details.initiator);
    console.log(t.hostname);
    return laterpayPaywalls.includes(t.hostname);
};

// block all tinypass scripts (used by lensing media & funke)
extapi.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (!isLaterpay(details)) return;
        return {cancel: true};
    }, {
        urls: ["*://*.laterpay.net/*"],
        types: ["script"]
    },
    ["blocking"]
);