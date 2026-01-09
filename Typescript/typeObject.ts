interface emp  {
    name:string,
    age:number,
    email:string,
    skills:string[],
    loc:string,
    title:string
}

var emp1:emp ={
    name:'Sahil',
    age:23,
    email:'sahilghosh10102@gmail.com',
    skills:['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    loc:'Kolkata',
    title:'Frontend Developer'
}

console.log(emp1);