const person : {
    name: string;
    age: number;
    hobbies: string[]
} = {
    name: 'Tarun',
    age: 24,
    hobbies: ['Sports','Cooking']
}

console.log(person.name)

for(const hobby of person.hobbies){
    console.log(hobby.toLocaleLowerCase())
}