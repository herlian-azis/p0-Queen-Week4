function checkAB(num) {
    // you can only write your code here!
    let numa=[]
    let numb=[]
    
    for (let i = 0; i < num.length; i++) {
        if(num[i] =="a"&& num[i+4] =="b" ){
            // numa.push(i)
            return true
        }
        else if(num[i] =="b"){
            numb.push(i)
        }
        
    }
    // if(numa )
    // console.log(numa,numb);
    
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false