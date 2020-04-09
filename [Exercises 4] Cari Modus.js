function cariModus(arr) {
    // you can only write your code here!
   let temp = []
   for (let i = 0; i < arr.length; i++) {
       for (let j = i+1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                temp.push(arr[i])   
            }   
        }
   }
   return temp
//    if(temp[0] != temp[0+1]){
//        return temp[0]
//    }
//    else if(temp[0] == undefined || temp[0] == temp[0+1])
//    return -1
  }
  
  // TEST CASES
//   console.log(cariModus([10, 4, 5, 2, 4])); // 4
//   console.log(cariModus([5, 10, 10, 6, 5,10])); // 5
//   console.log(cariModus([10, 3, 1, 2, 5])); // -1
//   console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7,])); // -1