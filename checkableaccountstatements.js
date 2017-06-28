// find table data with value statement
var tabdata = 'table > tbody > tr.tabdata > td + td + td > nobr';
var tabdata2 = 'table > tbody > tr.tabdata2 > td + td + td > nobr';
var checkbox = '<input type="checkbox" value="no">'
var matches = document.querySelectorAll(tabdata+','+tabdata2);
	
	for (i=0; i<matches.length; i++)
	    matches[i].innerHTML += checkbox;
