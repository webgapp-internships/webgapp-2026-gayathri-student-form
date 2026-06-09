
//for(let i=0;i<5;i++)
//{
//    console.log(i);
//}
//const students=["Divya","Gayathri","Dharshini"]
//for(let i=0;i<students.length;i++)
//{
  //  console.log(students[i]);

//}
//const students=["Divya","Gayathri","Dharshini"]
//for(let i=0;i<students.length;i++)
//{
  //  console.log(students[i],students[i].length);
//}
//const students=["Divya","Gayathri","Dharshini"]
//for(let i=0;i<(students.length);i++)
//{
  //  let count=0;
    //for(const ch of students[i])
    //{
      //  count++;
    //}
    //console.log(students[i]);
    //console.log(count);
//}
const students=["Divya","Gayathri","Dharshini","Diya"];
let i=0;
while(students[i] !== undefined)
{
    let count=0;
   while(students[i][count]!==undefined)
   {
count++;
   }
       console.log(students[i]);
    console.log(count);
    i++;
}