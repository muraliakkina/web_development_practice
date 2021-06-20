var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ]

// By using for in loop
for(let i in obj){
    for(let j in obj[i]){
        console.log(j + ":" + obj[i][j])
    }
}

// By using for of loop
for(let i of obj){
    for(let j in i){
        console.log(j + ":" + i[j])
    }
}

//BY using for loop 
for(i=0;i<obj.length;i++){
    for(let j in obj[i]){
        console.log(j + ":" + obj[i][j])
    }
}

//By using ForEach
obj.forEach(x => {
    for(let i in x){
        console.log(i + ":" + x[i])
    }
})
