!function(){"use strict";var e="/X-Sound/",s=[e,"/X-Sound/index.html","/X-Sound/favicon.ico","/X-Sound/lib/css/jquery-ui/jquery-ui-1.10.3.custom.min.css","/X-Sound/lib/css/colorbox/colorbox.css","/X-Sound/lib/js/select2/select2.css","/X-Sound/lib/js/angularjs/angular.min.js","/X-Sound/lib/js/jquery/jquery-2.1.1.min.js","/X-Sound/lib/js/jquery-ui/jquery-ui-1.9.2.custom.min.js","/X-Sound/lib/js/colorbox/jquery.colorbox-min.js","/X-Sound/lib/js/select2/select2.min.js","/X-Sound/lib/js/jquery-socialbutton/jquery.socialbutton-1.9.1.min.js","/X-Sound/stylesheets/css/mac.css","/X-Sound/stylesheets/css/noscript.css","/X-Sound/stylesheets/css/ie.css","/X-Sound/javascripts/xsound.min.js","/X-Sound/javascripts/controller.min.js","/X-Sound/register-service-worker.js"];self.addEventListener("install",function(e){e.waitUntil(self.skipWaiting())},!1),self.addEventListener("fetch",function(e){(s.some(function(s){return-1!==e.request.url.indexOf(s)})||e.request.url.endsWith(".wav")||e.request.url.endsWith(".mp3")||e.request.url.endsWith(".png")||e.request.url.endsWith(".txt"))&&e.respondWith(caches.match(e.request).then(function(s){if(s)return s;var n=e.request.clone();return fetch(n).then(function(s){var n=s.clone();return caches.open("x-sound-cache-v1.1.0").then(function(s){s.put(e.request,n)}),s})}))},!1),self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return"x-sound-cache-v1.1.0"!==e}).map(function(e){return caches.delete(e)}))}))},!1)}();