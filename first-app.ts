let userName:string|number;
userName="namitha";
userName=1

let user:{
    uname:string,
    age:number,
    isAdmin:boolean,
    id:string|number
};

user={
    uname:"nami",
    age:29,
    isAdmin:true,
    id:"abc"
}

let hobbies:Array<string>;
hobbies=['a','n','c']

function add(a:number,b:number):number{
    let result=a+b;
    return result;
}
function calculate(a:number,b:number,calc:(a:number,b:number)=>number){
    calc(a,b);
}
calculate(1,2,add)