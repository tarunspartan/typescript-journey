const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: 'Tarun',
    age: 24,
    hobbies: ['Sports', 'Cooking'],
    role: [1, 'admin']
}

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleLowerCase())
}