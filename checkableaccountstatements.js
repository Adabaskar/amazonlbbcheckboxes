// find table data with value statement
//var tabdata = 'table > tbody > tr.tabdata > td + td + td > nobr';
//var tabdata2 = 'table > tbody > tr.tabdata2 > td + td + td > nobr';
//var transactionPane = 'kkb-transaction-title-list-item' 
var transactionValue = 'div.list-item__amount > div.ng-star-inserted:not(.undefined)' 

var checkbox = '<input type="checkbox" value="no" style="margin-left: 5px; visibility : visible; display : inline;">'
var matches = document.querySelectorAll(transactionValue);
	
	for (i=0; i<matches.length; i++)
	    matches[i].innerHTML += checkbox;
