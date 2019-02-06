function fibonacci_number(nachi){
    if (nachi === 0) {
        return 0;
    }

    if (nachi === 1) {
        return 1;
    }

    return fibonacci_number(nachi - 1) + fibonacci_number(nachi - 2);
}

const memo = new Map([[0, 0], [1, 1]]);

function fibonacci_number_memoization(nachi){
    if (memo.get(nachi) === undefined) {
        memo.set(nachi, fibonacci_number_memoization(nachi - 1) + fibonacci_number_memoization(nachi - 2));
    }

    return memo.get(nachi);
}

fibonacci_number_memoization(100);
console.log(memo);

