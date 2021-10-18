const leap_year = (start,end) => {
   for (start; start <= end; ++start) { 
      if ((start % 400 !== 0 || start % 100 != 0) && (start % 4 == 0)) { // jika tahun tidak habis dibagi 400, tidak habis dibagi 100, akan tetapi habis dibagi 100, maka tampilkan tahun kabisat
          console.log(start)
      }
    } 
}
 leap_year(1900,2020)