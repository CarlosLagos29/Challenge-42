const TwoNumSum = (arr, num)=>{
let twoNumbers = [];
for(let x = 0; x < arr?.length; x++){
    for(let i = x + 1; i < arr.length; i++){ 
      if (arr[x] + arr[i] == num){ 
        twoNumbers = [arr[x], arr[i]]; 
        return twoNumbers;           
      }
    }
  }
return twoNumbers;
};

export default TwoNumSum