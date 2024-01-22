

// let a = [1, 2, 3, 4, 5]
// let b = [1, 2, 3, 4, 5, 6]
// let different= b.filter(c=> a.indexOf(c) == -1)
// console.log("🚀 ~ different:", different)


// let a = [1, 2, 3, 4, 5]
// let b = [1, 2, 3, 4, 5, 6]
// console.log(b.reduce((total, value) => total + value) - a.reduce((total, value) => total + value))






const users = [
    { name: "Jale", salary: 500 },
    { name: "Ayan", salary: 600 },
    { name: "Ömər", salary: 700 },
    {name:"Kamran",salary:800}
]

let totalSalary = users.reduce(function  (total, value ) {return total + value.salary },0)
console.log("🚀 ~ totalSalary:", totalSalary)