function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    let array = []
    let str =""
    for (let i = 1; i <= angka; i++) {
      for (let j= 1; j <= angka; j++) {
        if (j * i == angka) {
          str = i +""+j
          array.push(str)
        }  
      } 
    }
    for (let i = 0; i < array.length; i++) {
      for (let j= i+1; j < array.length; j++) {
        if (array[i]< array[j]) {
            temp = array[i]
            array[i] = array[j]
            array[j]=temp
        }  
      } 
    }
    return array[0].length
  }
  
  // // TEST CASES

  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2