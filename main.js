// const liczby = [55,70,50,60,99,100,120,258,600]

// const licz101do580 = liczby.filter(item => {
//     if(item > 101 && item < 580) {
//         return item
//     }
// })

// console.log(licz101do580)


// const tickets = [
//     {
//         name: "Jan",
//         isDog: false
//     },
//     {
//         name: "Andrzej",
//         isDog: true
//     },
//     {
//         name: "Adam",
//         isDog: false
//     },
//     {
//         name: "Karolina",
//         isDog: true
//     }
// ]

// const isDogFalse = tickets.filter(item => {
//     if(item.isDog === false) {
//         return item
//     }
// })

// console.log(isDogFalse)


// const num = [54,81,50,28,99,33,66,72]

// const podzielnePrzez3 = num.filter(item => {
//     if(item % 3 === 0 && item > 60) {
//         return item
//     } 
// })
// console.log(podzielnePrzez3)

// const number = [5,55, 40]

// const numberRazyDwa = number.map(item => item *2)

// let xd = []
// number.forEach(item => {
//     xd.push(item*2)
// })

// const peoples = [
//     {
//         name: "Jan",
//         age: 30,
//         vaccine: false
//     },
//     {
//         name: "Karol",
//         age: 50,
//         vaccine: false
//     },
//     {
//         name: "Anna",
//         age: 60,
//         vaccine: false
//     },
//     {
//         name: "Magda",
//         age: 70,
//         vaccine: false
//     }
// ]

// // const vaccineTrue = people.filter(item => {
// //     if (item.age >= 50)
// //     return item.vaccine = true
// // })

// // console.log(vaccineTrue)

// const people50Plus = people.map(item => {
//     if(item.age >= 50) {
//         item.vaccine = true
//         return item
//     }
// })

// console.log(people50Plus)

// const num3 = [54,81,50,28,99,33,66,72]

// // wieksze od 50 i pomnorzyc przez 2

// const numRazy3 = num3.filter(item => {
//     if(item > 50) {
//         return item
//     }
// }).map(item => item/3)

// console.log(numRazy3)

    
// const app = document.getElementById('app')
//     for(let i = 1; i < 6; i++) {
//         const paragraf = document.createElement('p')
//         paragraf.innerText = "Paragraf numer " + i
//         paragraf.setAttribute('class', 'paragraf')
//         app.appendChild(paragraf)
//     }


const people = [
    {
        name: "Jan",
        age: 30,
        sName: "Kowalski"
    },
    {
        name: "Karol",
        age: 50,
        sName: "Nowak"
    },
    {
        name: "Anna",
        age: 60,
        sName: "Duda"
    },
    {
        name: "Magda",
        age: 70,
        sName: "Tusk"
    }
]

const app = document.getElementById('app')
for(let i = 0; i < people.length; i++){
    let paragraf = document.createElement('p')
    paragraf.setAttribute('class', 'dane')
    paragraf.innerText = people[i].name + " " + people[i].sName + " " + people[i].age + " " + "lat."
    app.appendChild(paragraf)
}
