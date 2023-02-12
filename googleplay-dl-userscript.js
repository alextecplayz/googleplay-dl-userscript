// ==UserScript==
// @name         Download APK from Google Play
// @namespace    https://alextecplayz.github.io
// @version      2023-01-18
// @description  Adds a 'Download APK' button to an app's Google Play page, next to the Install button, that also has the Install button's CSS styling. The button redirects to APKMirror, searching for the app using the appID. Works with Tampermonkey and Bromite
// @author       AlexTECPlayz
// @match      https://play.google.com/store/apps/details?id=*
// @match      http://play.google.com/store/apps/details?id=*
// @grant        none
// @run-at        document-end
// @license        BSD
// @homepageURL    https://github.com/alextecplayz/googleplay-dl-userscript
// @supportURL     https://github.com/alextecplayz/googleplay-dl-userscript/issues
// ==/UserScript==

setTimeout(function() {
    var appId = document.URL.match(/id=([^&]+)/)[1];
    var apkMirrorUrl = 'https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s=' + appId;

    var parentDiv = document.querySelector('div.edaMIf');
    var newHTML = '<div class="bGJWSe" style="padding-left: 0.5rem; padding-right: 0.5rem;"><div class="VAgTTd LMcLV"><div><div class="u4ICaf"><div class="VfPpkd-dgl2Hf-ppHlrf-sM5MNb"><button type="button" id="apkmirror-button" class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 MjT6xe sOCCfd brKGGd BhQfub  zwjsl" aria-label="Download APK"><div class="VfPpkd-Jh9lGc"></div><div class="VfPpkd-J1Ukfc-LhBDec"></div><div class="VfPpkd-RLmnJb"></div><span jsname="V67aGc" class="VfPpkd-vQzf8d" aria-hidden="true"><span><span itemprop="offers" itemscope="" itemtype="https://schema.org/Offer"></span></span>Download APK</span></button></div></div></div></div></div>';
    parentDiv.insertAdjacentHTML('beforeend',newHTML);
    var apkmirror_button = document.getElementById("apkmirror-button");
    apkmirror_button.onclick = function() {
        location.href = apkMirrorUrl;
    };
}, 1000);
