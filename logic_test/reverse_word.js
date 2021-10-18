const reserve_word = (str) => {
    let words = str.match(/\S+/g) // pecah kalimat mejadi array berdasarkan white space
    let result = ""

    for (let i = 0; i < words.length; i++) {
        if(/[A-Z]/.test(words[i].split(''))) { // untuk mengecek bila ada huruf kapital
            let lowercase = words[i].split('').reverse().join('').toLowerCase()
            result += lowercase.charAt(0).toUpperCase() + lowercase.slice(1) + " "
        } else {
           result += words[i].split('').reverse().join('') + " ";
        }
    }
  console.log(result)
}

reserve_word('I am A Great human')