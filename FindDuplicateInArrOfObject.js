
let arr = [
  {id:1,name:'test1'},
  {id:2,name:'test2'},
  {id:3,name:'test3'},
  {id:2,name:'test4'},
  {id:1,name:'test5'},
  {id:4,name:'test6'},
  {id:5,name:'test7'},
  {id:4,name:'test8'}
]

arr.reduce(function(acc,current){
let index = acc.find(function(value,id){
  return id === current.id;
})
if(!index){
  return acc.concat([current])
}else{
  return acc;
}
},[]);
