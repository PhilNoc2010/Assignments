// recursive
const { rperformance } = require('perf_hooks');
const rstart = performance.now();

function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
console.log(rFib(20));
console.log(`This took ${performance.now() - rstart} milliseconds to run`);

// iterative

const { iperformance } = require('perf_hooks');
const istart = performance.now();

function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
// iFib(20);

console.log(iFib(20));
console.log(`This took ${performance.now() - istart} milliseconds to run`);