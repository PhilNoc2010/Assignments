const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

const { mperformance } = require('perf_hooks');
const mstart = performance.now();

const reversed1 = story.split("").reverse().join("");
console.log(`This took ${performance.now() - mstart} milliseconds to run`);
console.log(reversed1)


// quicker way (?)

function reverseStr(story){
    let outStory = ""
    for (let i = 0; i < story.length; i++) {
        outStory = story[i] + outStory
    }
    return outStory
}

const { lperformance } = require('perf_hooks');
const lstart = performance.now();

console.log(reverseStr(story))

console.log(`This took ${performance.now() - lstart} milliseconds to run`);