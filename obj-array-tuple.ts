enum Role { ADMIN, READ_ONLY, AUTHOR }
const person = {
    name: 'Tarun',
    age: 24,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleLowerCase())
}