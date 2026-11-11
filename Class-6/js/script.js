console.log("Hellow Javascript")

let value1 = 25

value1 = 50

const value2 = 100
// value2 = 200

// age 10 er kom = child
// age 10 er same or 10 er beshi and 19 er kom = teen
// baki shob = adult

// totalTeen
// totalChild
// totalAdult

// age1 = 14 (teen)

const ages = [14, 20, 55, 10, 5, 25, 33, 66, 100, 46, 75, 17, 9, 29, 36, 94, 24, 10, 20 ,31]

const countTotal = ages.length

let totalChild = 0
let totalTeen = 0
let totalAdult = 0

for(let i = 0; i < countTotal; i++){
    if(ages[i]<10){
        console.log("age"+(i+1)+" = "+ages[i]+" (child)");
    }else if(ages[i]>=10 && ages[i]<19){
        console.log("age"+(i+1)+" = "+ages[i]+" (teen)");
    }else{
        console.log("age"+(i+1)+" = "+ages[i]+" (adult)");
    }
}

// for(let i = 0; i < countTotal; i++){
//     if(ages[i]<10){
//         totalChild++
//     }else if(ages[i]>=10 && ages[i]<19){
//         totalTeen++
//     }else{
//         totalAdult++
//     }
// }

// console.log("Total child:"+totalChild)
// console.log(totalTeen)
// console.log(totalAdult)


function sum(value1=5, value2=7){
    return value1 + value2;
}

console.log(sum())

const student1 = {
    name: "Sabbir Hossain",
    id: 6546,
    department: "CSE",
    address: {
        district: "Jashore",
        thana: "Oi eky"
    }
}

const student = [{name: "Student A", id: 125}, {name: "Student B", id: 126}]

for(let i = 0; i<student.length; i++){
    console.log(student[i].name)
}

console.log(student1.address.district)