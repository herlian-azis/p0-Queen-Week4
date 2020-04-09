function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let result =[]
    for (let i = 0; i < arrPenumpang.length; i++) {
        for (let j = 0; j < rute.length; j++) {
            if (rute[j]==arrPenumpang[i][1] ) {
                awal = j * 2000
            }
            else if (rute[j]==arrPenumpang[i][2] ) {
                akhir = j * 2000    
            }
        }
        result.push({penumpang: arrPenumpang[i][0], naikDari: arrPenumpang[i][1], tujuan: arrPenumpang[i][2], bayar:Math.abs(akhir -awal)}) 
    }
    return result
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]