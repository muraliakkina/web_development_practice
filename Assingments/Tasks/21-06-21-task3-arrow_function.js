// Arrow Functions
//Return all palindromes in an array
var palinarray = ['anna','level','stats','oil','petrol',101,101101,144]
var ne = [];
var findPalin = (arg1)=>{
    for(i of arg1){
        if(Number.isInteger(i)){
            i = i.toString()
            var re = ''
            for(j=i.length;j>=1;j--){
                re += i[j-1]
            }
            if(re == i){
                ne.push(re)
            }
    
        }else{
            var rev = '';
            for(j=i.length;j>=1;j--){
                rev += i[j-1]  
            }
            if(rev == i){
                ne.push(rev)
            }
        }  
    }
    console.log(ne)    
}
findPalin(palinarray)


//Return median of two sorted arrays of same size 
var array1 = [1,10,11,12,5,6];
var array2 = [2,7,3,8,4,9];
var findmedian = (arg1,arg2)=>{
    var newarray = [...arg1,...arg2];
    var sortarray = newarray.sort((a,b)=>(a-b));
    var middle = sortarray.length/2
    return ((sortarray[middle])+(sortarray[middle-1]))/2;
}
console.log(findmedian(array1,array2))

//Sum of all numbers in an Array
var a = [1,2,3,4,5,6,7,8,9,10];
var totalsum = 0;
var sum = (xy)=>{
    for(let i of a){
        totalsum += i
    }
    console.log(totalsum)
}
sum(a)

// To Convert all the strings to title caps in a string array
var problem2 = 'i am using javascript'
problem2 = problem2.split(' ')
var bb = []
var titleCase = (arg2)=>{
    for(let i of arg2){
        let j = i[0];
        let k = j.toUpperCase();
        i = i.replace(j,k)
        bb.push(i)

    }
    console.log(bb)
}
titleCase(problem2)

// Prime checking
var arra = [1,2,3,4,5,6,7,8,9]
var prime = []
var primeCheck = (arra)=>{
  for(let i of arra){
    if(i == 2){
      prime.push(i)
    }else if(i<9&&i>2&&i%2!=0){
      prime.push(i)
    }else if(i>=9&&i%2!=0&&i%3!=0&&i%5!=0&&i%7!=0){
      prime.push(i);
    }
  }
  return prime;
}
console.log(primeCheck(arra))

// To print Odd number in array
var a = [1,2,3,4,5,6,7,8,9,10];
var b = [];
var x = (arg1)=>{
    for(let i of arg1){
        if(i%2!==0){
            b.push(i)
        }
    }
    console.log(b)   
}
x(a)
