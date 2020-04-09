function urutkanAbjad(str) {
    // you can only write your code here!
    let result =[]
    let alfa =""
    for (let p = 0; p < str.length; p++) {
        result.push(str[p])
        
    }
    for (let i = 0; i < result.length; i++) {
        for (let j = i+1; j < result.length; j++) {
            if(result[i] >result[j]){     
                temp = result[i]
                result[i] = result[j]
                result[j] = temp
                
            }
        }
    }
    for (let i = 0; i < result.length; i++) {
        alfa += result[i]     
    }
    return alfa
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'