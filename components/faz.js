//                                         ____
//   __ _____  ___  ___ ___ ___    _____ _/ / /
//  / // / _ \/ _ \/ _ `/ // / |/|/ / _ `/ / / 
//  \_,_/_//_/ .__/\_,_/\_, /|__,__/\_,_/_/_/  
//          /_/        /___/                           
//
//  faz component
//  github.com/tobimori/unpaywall
//

const d = document;

const mReq = new XMLHttpRequest();
const oUrl = new URL(window.location.href);
const mUrl = new URL(oUrl.pathname, "https://m.faz.net/");

const downloadDone = (e) => {
    d.getElementsByClassName("atc-ReadTime_Text")[0].innerText = "Unlocked by Unpaywall";
    d.getElementsByClassName("atc-TextParagraph")[0].innerText = JSON.parse(mReq.response.getElementById("schemaOrgJson").innerHTML).ArticleBody;
};

mReq.addEventListener("load", downloadDone);
mReq.open("GET", mUrl.href);
mReq.responseType = "document";
mReq.setRequestHeader("User-Agent", "Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/67.0.3396.87 Mobile Safari/537.36");
d.getElementsByClassName("js-atc-ContainerPaywall atc-ContainerPaywall") && mReq.send();
removeElements(
    d.getElementsByClassName("js-atc-ContainerPaywall atc-ContainerPaywall"), // Paywall ad
    d.getElementsByClassName("atc-ContainerInfo js-atc-ContainerInfo"), // Author information
    d.getElementsByClassName("o-Icon atc-ReadTime_Icon"), // Reading time icon
    d.getElementsByClassName("atc-TextParagraph") // paragraphs
);
d.getElementsByClassName("atc-Text js-atc-Text")[0].innerHTML = '<div class="atc-Text js-atc-Text"><p class="atc-TextParagraph">Unlocking...</p></div>'
d.getElementsByClassName("atc-ReadTime_Text")[0].innerText = "Unlocking..."





