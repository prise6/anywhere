/**
 * Redirect to a "random" link in current page
 * - naive code - 
 */

javascript:(function(r = "http://swapthatlink.com", c = document.location.href){
	var l = Array.prototype.slice.call(document.getElementsByTagName('a')),
	    e = new RegExp("^(javascript|mailto|(https?)?" + c + "/?#)"),
	    f = false;
	while(!f & l.length>0){
		i = Math.floor(Math.random()*l.length);
		if (e.test(l[i].href) || l[i].href == c) l.splice(i,1);
		else {
			r = l[i].href;
			f = true;
		}
	}
	document.location.href = r;
	return;
})();