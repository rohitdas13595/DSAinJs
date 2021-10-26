/**Time complexity O(2^n) and space complexity is also O(2^n) for all stack calls. */


const fibonacci= (n)=>{
    if(n===1 || n=== 2){
        return 1;
    }
    return (fibonacci(n-1)+ fibonacci(n-2));
}

console.log(fibonacci(8));