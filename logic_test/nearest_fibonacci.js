const nearest_fibonacci = (array) => {
    let n = 0
    for (let i = 0; i < array.length; i++) {
       n = n + array[i]
    }
    
    if(n !== 0) {
        let first = 0
        let second = 1
        let third = first + second

        while (third <= n) {
            first = second
            second = third
            third = first + second
        }

        if (Math.abs(third - n) >= Math.abs(second - n)) {
            return second 
        } else {
           return third
        } 
    } else {
        return 0
    }
}

console.log(nearest_fibonacci([15,1,3]))