//2d array---hourglassproblem--Hacker Rank



function hourglassSum(arr) {
    let max = -Infinity; // because matrix can have negatives
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2]
                    + arr[i+1][j+1] +
                      arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            max = Math.max(max, sum);
        }
    }
    return max;
}

