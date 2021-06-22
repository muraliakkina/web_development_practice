// Anonymous Functions
// To print Odd number in array
var a = [1,2,3,4,5,6,7,8,9,10];
var b = [];
var x = function (arg1){
    for(let i of arg1){
        if(i%2!==0){
            b.push(i)
        }
    }
    //console.log(b)   
}
x(a)

//Return all palindromes in an array
var palinarray = ['anna','level','stats','oil','petrol',101,101101,144]
var ne = [];
var findPalin = function (arg1){
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
var findmedian = function(arg1,arg2){
    var newarray = [...arg1,...arg2];
    var sortarray = newarray.sort((a,b)=>(a-b));
    var middle = sortarray.length/2
    return ((sortarray[middle])+(sortarray[middle-1]))/2;
}
console.log(findmedian(array1,array2))



