var obj1={
    id:1,
    name:"akhila",
    sibling:"true",
    state:"TS"
}
var obj2={
    id:2,
    name:"meghana",
    sibling:"true",
    state:"ts"
}
var obj3={
    id:3,
    name:"vennela",
    sibling:"true",
    state:"ts"
}
var obj4={
    id:4,
    name:"aravind",
    sibling:"true",
    state:"ts"
}
var obj5={
    id:5,
    name:"tejaswini",
    sibling:"true",
    state:"ts"
}
var obj6={
    id:6,
    name:"manaswini",
    sibling:"true",
    state:"ts"
}
var obj7={
    id:7,
    name:"aishu",
    sibling:"true",
    state:"ts"
}
var obj8={
    id:3,
    name:"srikar",

    state:"ts"
}
var obj9={
    id:3,
    name:"haripriya",
    
    state:"ts"
}
var obj10={
    id:3,
    name:"samyuktha",
    
    state:"ts"
}
var  details=function(k,l){ 
    console.log(`${k} ${l}person with id no ${this.id}and with ${this.name}  from ${this.state}`)
}
var  details1=function(k,l){ 
    return `${k} ${l}person with id no ${this.id}and with ${this.name}  from ${this.state}`
}
details.call(obj1,"hello","am")
details.apply(obj1,["hello","am"])
 x=details1.bind(obj1,"hello" ,"there")
console.log(x());

details.call(obj2,"hello","am")
details.apply(obj2,["hello","am"])
 y=details1.bind(obj2,"hello" ,"there")
console.log(y());

details.call(obj3,"hello","am")
details.apply(obj3,["hello","am"])
 z=details1.bind(obj1,"hello" ,"there")
console.log(z());

details.call(obj4,"hello","am")
details.apply(obj4,["hello","am"])
 a=details1.bind(obj4,"hello" ,"there")
console.log(a());

details.call(obj5,"hello","am")
details.apply(obj5,["hello","am"])
 b=details1.bind(obj5,"hello" ,"there")
console.log(b());

details.call(obj6,"hello","am")
details.apply(obj6,["hello","am"])
 c=details1.bind(obj6,"hello", "there")
console.log(c());

details.call(obj7,"hello","am")
details.apply(obj7,["hello","am"])
 d=details1.bind(obj7,"hello" ,"there")
console.log(d());

details.call(obj8,"hello","am")
details.apply(obj8,["hello","am"])
 e=details1.bind(obj8,"hello", "there")
console.log(e());


details.call(obj9,"hello","am")
details.apply(obj9,["hello","am"])
 f=details1.bind(obj9,"hello ","there")
console.log(f());

details.call(obj10,"hello","am")
details.apply(obj10,["hello","am"])
 g=details1.bind(obj10,"hello", "there")
console.log(g());









