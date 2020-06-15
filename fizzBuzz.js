
/*
Fizz Buzz

A short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

*/

var number = 1;
while (number <= 100){
if(number % 3 == 0){ 
console.log('Fizz');
}else if(number % 5 == 0 && number % 3 != 0){

console.log('Buzz');

}else{
	console.log(number);
}
number = number + 1;
if (number % 15 == 0) {

	console.log('FizzBuzz');
}
}

//Abdwahab Adekola github: @codarbind twitter: @wahabind 