
a=[1,2,3,4,6,7]
a[2]
console.log(a)
b=[]
c=[]
a.forEach((element,index) => {
if(index==4){
b.push("vahini")
 }else{
b.push(element)
 }
c.push(index)
});
console.log(b)
console.log(c)

