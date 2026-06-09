const name=["divya","gayathri","dharshini"];
const department=["IT","CS","BCA"];
const mark=["90","30","80"];

function student(mark){
if(mark>=35 ) 
     {
    return "pass"
}
    else{
        return "fail"
    }
}
    //for loop
for (let i=0;i<name.length;i++)
{
    console.log("name:",name[i]);
    console.log("Department:",department[i]);
    console.log("Mark:",mark[i]);
    console.log("Result:",student(mark[i])); 
}
//while loop
let i=0;
console.log("Passed Students");
while(i<name.length){
    if(student(mark[i])==="pass"){
        console.log(name[i]);
    }
    i++;
}
i=0;
console.log("Failed Students");
while(i<name.length){
    if(student(mark[i])==="fail"){
        console.log(name[i]);
    }
    i++;
}



