# googleplay-dl-userscript
Userscript that adds a 'Download APK' button to an app's Google Play page, next to the Install button, that also has the Install button's CSS styling. The button redirects to APKMirror, searching for the app using the appID. Works with Tampermonkey and Bromite.

Due to how Google Play loads its web pages, I couldn't get the userscript to show up unless you navigate to the app's specific page by URL (e.g. by going to https://play.google.com/store/apps/details?id=com.mojang.minecraftpe, which will show the 'Download APK' button after the page is loaded) or by reloading any Google Play app page after navigating to it.

If needed, I'll update the userscript every time Google Play changes the website, and maybe add more buttons for different APK websites (e.g. APKPure, APKAward, An1, 5play, Mobilism), and I won't stop to that. Play Books could get a libgen button, and Play Movies & TV torrent sources or online streaming sources)
