function changeMe(arr) {
    // you can only write your code here!
    if(arr.length == 0 ){
        return console.log(`""`);
        
    }
    let obj ={}
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
           obj.firstName=  arr[i][0],
           obj.lastName=arr[i][1],
           obj.gender=arr[i][2],
           obj.age=arr[i][3]    
           }
        
        if(obj.age != undefined){
            obj.age =  2020-obj.age 
            console.log(i+1+".",arr[i][0],arr[i][1]+":",obj);
        }
        else if(obj.age === undefined){
                           obj.age= "Invalid Birth Year"
                           console.log(i+1+".",arr[i][0],arr[i][1]+":",obj);
        }
    }
        
}

  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
   // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""