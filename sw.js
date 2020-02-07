//This is the "Offline copy of pages" wervice worker
//Install stage sets up the index page (home page) in the cahche and opens a new cache
//importScripts('/cache-polyfill.js');


//self.addEventListener('install', function(e) {
 //e.waitUntil(
  // caches.open('airhorner').then(function(cache) {
   //  return cache.addAll([
     //  '/',
      // '/index.html',
     //  '/index.html?homescreen=1',
    //   '/?homescreen=1',
    //   '/styles/main.css',
    //   '/scripts/main.min.js',
    //   '/sounds/airhorn.mp3'
  //   ]);
  // })
// );
//});
//self.addEventListener('fetch', function(event) {
//  console.log(event.request.url);
 //});
 //self.addEventListener('fetch', function(event) {
 // console.log(event.request.url);
 
 // event.respondWith(
 //   caches.match(event.request).then(function(response) {
  //    return response || fetch(event.request);
 //   })
 // );
 //});
self.addEventListener('install', function(event) {
  var indexPage = new Request('homepage.html');
 
  event.waitUntil(
    fetch(indexPage).then(function(response) {
      return caches.open('pwabuilder-offline').then(function(cache) {
        console.log('[PWA Builder] Cached index page during Install'+ response.url);
        return cache.put(indexPage, response);
      });
  }));
});
//If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener('fetch', function(event) {
  var updateCache = function(request){
    return caches.open('pwabuilder-offline').then(function (cache) {
      return fetch(request).then(function (response) {
        console.log('[PWA Builder] add page to offline'+response.url)
        return cache.put(request, response);
      });
    });
  };
  event.waitUntil(updateCache(event.request));
  event.respondWith(
    fetch(event.request).catch(function(error) {
      console.log( '[PWA Builder] Network request Failed. Serving content from cache: ' + error );
      //Check to see if you have it in the cache
      //Return response
      //If not in the cache, then return error page
      return caches.open('pwabuilder-offline').then(function (cache) {
        return cache.match(event.request).then(function (matching) {
          var report =  !matching || matching.status == 404?Promise.reject('no-match'): matching;
          return report
        });
      });
    })
  );
})