function unknown(number) {
	return number ** 2;
}

console.log(unknown(3));
// console.log( number ** 2 );
// console.log( 3 ** 2 );
// console.log( 9 );

console.log(unknown(10));
// console.log( number ** 2 );
// console.log( 10 ** 2 );
// console.log( 100 );

console.log(unknown(5));
// console.log( number ** 2 );
// console.log( 5 ** 2 );
// console.log( 25 );

console.log((unknown(8) + 1) * (12 / unknown(2)));
// console.log( (64 + 1) * (12 / unknown(2)) );
// console.log( (64 + 1) * (12 / 4) );
// console.log(195);
