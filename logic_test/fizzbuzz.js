const fizzbuzz = (n) => {
    if (n !== 0) {
        let arr = []
        let num
        for (let i = 0; i < n; i++) {
            num = i + 1
            if ((num % 3 === 0) && (num % 5 === 0)) {
                arr.push('FizzBuzz')
            } else if (num % 3 === 0) {
                arr.push('Fizz')
            } else if (num % 5 === 0) {
                arr.push('Buzz')
            } else {
                arr.push(num.toString())
            }
        }
        console.log(arr)
    } else {
        console.log([n.toString()])
    }
}

fizzbuzz(3)