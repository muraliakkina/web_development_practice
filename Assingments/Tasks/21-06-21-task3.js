//Return all palindromes in an array
var palinarray = ['anna','level','stats','oil','petrol',101,101101,144]
var ne = [];
var findPalin => (arg1){
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
