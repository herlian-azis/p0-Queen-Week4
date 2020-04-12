function cariModus(arr) {
    // you can only write your code here!
    let modus = 0
    let total = 0
    let temp = 0
   for (let i = 0; i < arr.length; i++) {
    count =0
       for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
              count++
            }   
          }
         if(count > total) {
           total =count
          temp = arr[i]
         }
   }
   if (total == arr.length || total == 1) {
    modus = -1;
  } else {
    modus = temp;
  }
  return modus;
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7,])); // -1