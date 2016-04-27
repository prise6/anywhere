## redirect to ***random*** link in current page
 __bookmarklet to install : drag and drop __

<a href="javascript:(function(){var l=Array.prototype.slice.call(document.getElementsByTagName('a'));for(var i=l.length-1;i>=0;i--){if(/^(#|mailto)/.test(l[i].href.slice(0,1))||l[i].href==document.location.href)l.splice(i,0)};r=l[Math.floor(Math.random()*l.length)].href;console.log(r);document.location.href=r})();">Anywhere</a>

 to be continued

