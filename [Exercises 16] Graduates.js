  // Code disini
  function graduates (students) {
    let result ={}
    for (let i = 0; i < students.length; i++) {
      if(!(students[i].class in result)){
        result[students[i].class]=[]
    }
      for (let j = i+1; j < students.length; j++) {
        if (students[i].score <students[j].score ) {
            temp = students[i]
            students[i] =students[j]
            students[j]  =  temp     
          }
        }
      }
        for (let i = 0; i < students.length; i++) {
          if(!(students[i].class in result)){
            result[students[i].class]=[]
          }
          
          if(students[i].score >= 75) {
            
            result[students[i].class].push(students[i])
          }
          
          delete students[i].class
        }
      
      return result
}

console.log(graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}