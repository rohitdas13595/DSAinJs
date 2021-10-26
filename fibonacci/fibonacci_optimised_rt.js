// uses botttomup approach

var fibBottomUp = (n) => {
    var mem = [];
    for (var i=0; i <=n; i++) {
        if (i == 0) mem[i] = 0;
        else if (i <=2) mem[i] = 1;
        else {
            mem[i] = mem[i-1] + mem[i-2];
        }
    }
    return mem[n];
}

console.log(fibBottomUp(40));
