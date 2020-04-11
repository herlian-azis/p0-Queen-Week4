function resultTime(memberId, money) {
  let item=[{
    barang :'Sepatu Stacattu',
    harga :1500000
  },{
    barang :'Baju Zoro',
    harga :500000
  },{
    barang :'Baju H&N',
    harga :250000
  },{
    barang :'Sweater Uniklooh',
    harga :175000
  },{
    barang :'Casing Handphone',
    harga :50000
  }]
    if(memberId == undefined && money == undefined){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }else if (memberId == ""){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }else if (money <= item[4].harga){
      return "Mohon maaf, uang tidak cukup"
    }
 
    let result={
      memberId:memberId,
      money:money,
      listPurchased:[],
      changeMoney: 0
    }

    for (let i = 0; i < item.length; i++) {
      if (item[i].harga<=money ) {
        result.listPurchased.push(item[i].barang)
        money -= item[i].harga
      }   
    }
    result.changeMoney=money
    return result
}


// TEST CASES
console.log(resultTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(resultTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(resultTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(resultTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(resultTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja