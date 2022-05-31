/*
console.log("yahoo")

const user = {  // ссылка на созданный объект
    name: "Bob",
    age: 26,
    isMarried: true
}
const arr = [1,2,3,4,5]

const copyUser = user // тегу copyUser присвоена ссылка объекта user
                      // copyUser не объект тк нет {}
                      // new Object(...) - создание объекта {}
                      // new Array(...) - создание массива []
                      // Object.assign({}, ...) - создание нового объекта {} с присвоение ему парраметров оъекта ...

user.name = 'Anna'
console.log(user.name)

const realCopyUser = {...user} // новый объект realCopyUser в котором нежат данные user
// realCopyUser.name = user.name
// realCopyUser.age = user.age
// realCopyUser.isMarried = user.isMarried
console.log(realCopyUser)
console.log(realCopyUser === user) // false тк это разные объекты с разными на них ссылками
// "..." - spread operator

const realCopyArr = [...arr] // новый массив realCopyArr с данными массива arr

*/

const user = {  // ссылка на созданный объект
    name: "Bob",
    age: 26,
    isMarried: true,
    friends: ["Alex", "Bob", "John"],
    address: {
        city: "Bobruisk",
        street: "Lenina"
    }
}

const copyUser = {...user}
copyUser.friends.push("Anna")
console.log(user)

// Поверхностная копия (shallow copy) - это копия без учета вложенности других обеътов
// Глубокая копия (deep copy) - это копия с учетом вложенности других объектов

const deepCopy = {...user, friends: [...user.friends]}

// создаем новый объект "deepCopy" и присваеваем ему данные объекта "user"
// но создадим(пересоздадим) новый массив "friends: [...user.friends]" внути объектс "deepCopy"
// и присвоем ему параметры массива friends

const deepCopyUser = {...user, friends: [...user.friends], address: {...user.address}}

// structuredClone() - автоматически делает глубокую копию объекта
// const deepCopyUser = structuredClone(user)

const students = [
    {name: "Bob"},
    {name: "Alex"},
    {name: "Ann"},
]

const shallowCopyStudents = {...students} // копируем массив спредом тк объекты внутри него простые

const deepCopyStudents = []
for (let i = 0; i < students.length; i++) {
    deepCopyStudents[i] = {...students[i]}
}

const deepCopyMapFunctionStudents = students.map ( student => ({...student}))
console.log(deepCopyMapFunctionStudents)









