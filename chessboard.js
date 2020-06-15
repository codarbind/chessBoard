//chessboard program

let size = prompt('Size of grid you want?');
size = Number(size);
let size1 = size;

if ( size<= 1 ) {

	alert('INVALID');
}else if ( size % 2 == 0) {

//alert('i am even');
let size2 = size1 / 2;
var basic = " #";
var nexter = "# "
size = size /2 ;

while(size >1){
size = size - 1;
basic = basic + ' #';
nexter = nexter + '# ';
}
console.log(size2);
while(size2 > 0){
console.log(basic);
console.log(nexter);
size2 = size2 - 1;
}



} else if ( size % 2 == 1) {

//alert('i am odd');
let size2 = (size1+1) / 2;
var basic = " ";
var nexter = "#"
//size = (size + 1)/2;

while(size % 2 == 1 && size >1){
size = size - 1;
basic = basic + '#';
nexter = nexter + ' ';

while(size % 2 == 0 && size > 1){

	size = size - 1;
	basic = basic + ' ';
	nexter = nexter + '#'
}
}
//console.log(size2);
while(size1 > 1){
console.log(basic);
console.log(nexter);
size1 = size1 - 2;
if (size1 == 1) {
	size1 = size1 - 1;
	console.log(basic);
}
}
/*while(size2 = 1){
	
	
}*/

}
