function highestScore (students) {
    // Code disini
    let result ={}
    for (let i = 0; i < students.length; i++) {
        for (let j = i+1; j < students.length; j++) {
            if(students[i].score >students[j].score ){
                temp =students[i]
                students[i]=students[j]
                students[j]= temp
            }
        }
    }
    for (let i = 0; i < students.length; i++) {
        if (students[i].score <students[i+1].score) {
            
            result[students[i].class]=students[i]
        }else if(students[i].score >students[i+1].score){
            result[students[i].class]=students[i]
        }
        // if(!(students[i].class in result)){
            //     result[students[i].class]={}
            // }
        }
        console.log(result);

    
    
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
//   console.log(highestScore([
//     {
//       name: 'Alexander',
//       score: 100,
//       class: 'foxes'
//     },
//     {
//       name: 'Alisa',
//       score: 76,
//       class: 'wolves'
//     },
//     {
//       name: 'Vladimir',
//       score: 92,
//       class: 'foxes'
//     },
//     {
//       name: 'Albert',
//       score: 71,
//       class: 'wolves'
//     },
//     {
//       name: 'Viktor',
//       score: 80,
//       class: 'tigers'
//     }
//   ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}