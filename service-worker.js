!function(){"use strict";var e="1.0.1",n="x-sound-cache-v"+e,t=["lib/css/jquery-ui/jquery-ui-1.10.3.custom.min.css","lib/css/colorbox/colorbox.css","lib/js/select2/select2.css","lib/js/angularjs/angular.min.js","lib/js/jquery/jquery-2.1.1.min.js","lib/js/jquery-ui/jquery-ui-1.9.2.custom.min.js","lib/js/colorbox/jquery.colorbox-min.js","lib/js/select2/select2.min.js","javascripts/xsound.min.js"];self.addEventListener("install",function(e){e.waitUntil(caches.open(n).then(function(e){return e.addAll(t)}))},!1),self.addEventListener("fetch",function(e){(e.request.url.endsWith(".wav")||e.request.url.endsWith(".mp3")||e.request.url.endsWith(".png"))&&e.respondWith(caches.match(e.request).then(function(t){if(t)return t;var s=e.request.clone();return fetch(s).then(function(t){var s=t.clone();return caches.open(n).then(function(n){n.put(e.request,s)}),t})}))},!1),self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return e!==n}).map(function(e){return caches["delete"](e)}))}))},!1)}();