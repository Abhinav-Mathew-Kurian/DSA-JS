//HackerRank question 2 Dynamic Array in 2 d


function dynamicArray(n, queries) {
    let seqList = Array.from({ length: n }, () => []);
    let lastAnswer = 0;
    let result = [];

    for (let [type, x, y] of queries) {
        let idx = (x ^ lastAnswer) % n;

        if (type === 1) {
            seqList[idx].push(y);
        } else if (type === 2) {
            lastAnswer = seqList[idx][y % seqList[idx].length];
            result.push(lastAnswer);
        }
    }
    return result;
}

