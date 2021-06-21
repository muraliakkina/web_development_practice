var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

// Method - 1
var dumy = []
if(Object.keys(obj1).length == Object.keys(obj2).length){
    for(let i in Object.keys(obj1)){
        for(let j in Object.keys(obj2)){
            if((Object.keys(obj1)[i]===Object.keys(obj2)[j])&&(i!==j)){
                dumy.push(Object.keys(obj1)[i])
            }
        }
        
    }
}
var count = 0 
if(dumy.length == Object.keys(obj2).length){
    for(i of dumy){
        if(obj1.i == obj2.i){
            count++
        }else{
            count--
        }
    }
}
if(count == dumy.length){
    console.log('both the objects are equal')
}else{
    console.log('Both objects are not Equal')
}
//End of Method -1
