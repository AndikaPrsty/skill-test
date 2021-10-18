const palindrome_checker  = (str) => {
    let len = str.length - 1
    for (let i = 0; i < len/2; i++) { // hanya loop setengan dari string
        let x = str[i] // untuk karakter secara forward 
        let y = str[len-i] // untuk karakter secara backward 

        if (x !== y) {
            // akan me-return false jika karakter forward dan backward tidak sama
            return 'not palindrome'
        }
    }
    // akan me-return true jika sama
    return 'palindrome'
}

palindrome_checker('madam')

