/**
 * Redirect to a "random" link in current page
 * - naive code - 
 */

javascript:(function(){
	var l = Array.prototype.slice.call(document.getElementsByTagName('a')),
		c = document.location.href;
	var e = new RegExp("^(mailto|(https?)?"+c+"/?#)"),
		r = "http://swapthatlink.com";
	for (var i = l.length-1;i>=0;i--){
		if (e.test(l[i].href.slice(0,1)) || l[i].href == c) l.splice(i,0);
	};
	if (l.length>0) r = l[Math.floor(Math.random()*l.length)].href;
	document.location.href = r;
	return;
})();