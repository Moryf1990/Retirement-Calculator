var currentAge = prompt('What is your current age?');
document.write('<div>What is your current age? ' +currentAge+' </div>');

var retireAge = prompt('At what age do you want to retire?');
document.write('<div>At what age do you want to retire? ' +retireAge+' </div>')

var retirement = parseFloat(retireAge - currentAge);
var year = new Date().getFullYear();
var retireYear = new Date().getFullYear() + retirement;
var lateRetire = year-retireYear

if(retireYear < year) {
	document.write('You could have retired in '+parseFloat(year+retirement)+', '+ lateRetire + ' years ago.</div>');
}
else {
	document.write('<div>You have '+retirement+' years left until you can retire.</div>');
	document.write('<div>It\'s '+year+', so you can retire in '+retireYear+'.' + '</div>');
}