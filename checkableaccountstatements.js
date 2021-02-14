// find table data with value statement
//var tabdata = 'table > tbody > tr.tabdata > td + td + td > nobr';
//var tabdata2 = 'table > tbody > tr.tabdata2 > td + td + td > nobr';
//var transactionPane = 'kkb-transaction-title-list-item' 

var transactionValueSelectorLbb = 'div.list-item__amount > div.ng-star-inserted:not(.list-item__amount_bonus)'

var checkbox = '<input type="checkbox" value="no" style="margin-left: 5px; visibility : visible; display : inline;">'
var matchesLbb = document.querySelectorAll(transactionValueSelectorLbb);

for (i = 0; i < matchesLbb.length; i++)
	matchesLbb[i].innerHTML += checkbox;

var transactionValueSelectorSparda = '.XContainer.SollKennzeichnung'
var matchesSparda = document.querySelectorAll(transactionValueSelectorSparda);

for (i = 0; i < matchesSparda.length; i++)
	matchesSparda[i].innerHTML += checkbox;

