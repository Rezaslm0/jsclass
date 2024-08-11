function user(user) {
    user1 = {
        name: "Jasem",
        lastName: "Amiri",
        age: 10,
    }
    user2 = {
        name: "Ahmad",
        lastName: "Ghasemi",
        age: 22,
    }
    user3 = {
        name: "Mohsen",
        lastName: "Ahmadi",
        age: 7,
    }
    user4 = {
        name: "Mina",
        lastName: "Mohseni",
        age: 72,
    }
    if (user == "Jasem") {
        result = `${user1.name} ${user1.lastName} is ${user1.age} `
    } else if (user == "Ahmad") {
        result = `${user2.name} ${user2.lastName} is ${user2.age} `
    } else if (user == "mohsen") {
        result = `${user3.name} ${user3.lastName} is ${user3.age} `
    } else if (user == "Mina") {
        result = `${user4.name} ${user4.lastName} is ${user4.age} `
    } else {
        result = "not found!!!!"
    }
    return result;
}
console.log(user("Jasem"))
console.log(user("Ahmad"))
console.log(user("mohsen"))
console.log(user("Mina"))