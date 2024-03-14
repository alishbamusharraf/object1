// ojects =>{} => {key: value} 
// objective array is used, if multiply students are there.
 
let student: {fullname:string,classId:number,rollNo:number,email:string,subjects:string[],isPassed:boolean,feeShedule:{month:string,fee:number}} = {
    fullname: "alishba musharraf",
    classId: 6800,
    rollNo: 19,
    email: "alishbalishy@gmail.com",
    subjects: ["physics","chemistry","maths"],
    isPassed: true,
    feeShedule :{              
     month : "august",
     fee: 3000 
       }
    }

console.log(student.fullname)
console.log(student.classId)
console.log(student.subjects[1])
console.log(student.isPassed)
console.log(student.feeShedule)
