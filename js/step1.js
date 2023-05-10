let name = 'Pasha';
let age = 12;
let isAdult = true;

let user = {
    name: 'Olga',
    age: 20,
    isWoman: true
};
user.defaultGreetings = `My name: ${user.name}. I'm ${user.age} old`;

user.isWoman = true;

//console.log(user);

let studentsNames = [1, 3, 54, 5];

studentsNames[1] = -9;

const create = function (name, age, isWoman) {
    let user = {
        name: 'Ivan',
        age: 30,
        isWoman: false
    };
    user.defaultGreetings = `My name: ${user.name}. I'm ${user.age} old`;
    return user;
}

var ivan = create('Ivan', 20, false);
var olga = create('Olga', 12, true);

const womanNames = ['Olga', 'Lera', 'Ira'];
const manNames = ['Pasha', 'Emanuil', 'Ivan'];

function generateUser() {
    let user = {};

    user.age = getRandomNumber(18, 50);
    user.isWoman = getRandoBool();
    user.name = getRandomName(user.isWoman);


    return user;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function getRandomName(isWoman) {
    const names = isWoman
        ? womanNames
        : manNames;
    const lastIndex = names.length - 1;
    return names[getRandomNumber(0, lastIndex)];
}

function getRandoBool() {
    return getRandomNumber(0, 100) > 50;
}

const totalUserCount = 10;

var users = [];
for (let i = 0; i < totalUserCount; i++) {
    var randomUser = generateUser();
    //users[i] = randomUser;
    users.push(randomUser);
}

function generateUsers(count) {
    var users = [];
    for (let i = 0; i < count; i++) {
        var randomUser = generateUser();
        users.push(randomUser);
    }
    return users;
}

printUsersToConsole(users);

const whonanCount = users
    .filter(user => user.isWoman)
    .length;

console.log(`whoman [${whonanCount}/${totalUserCount}]`);

sortUserByAge(users);

printUsersToConsole(users);

//sortUserByName(users);
sortUserByField(users, (u) => u.name);

printUsersToConsole(users);

sortUserByField(users, (u) => u.isWoman);

printUsersToConsole(users);

function sortUserByAge(users) {
    sortUserByXXX(users, (user1, user2) => user1.age > user2.age);
}

function sortUserByName(users) {
    sortUserByXXX(users, (user1, user2) => user1.name > user2.name);
}

function sortUserByXXX(users, compare) {
    for (let k = 0; k < users.length; k++) {
        for (let i = 0; i < users.length - 1; i++) {
            const isNeedToSwap = compare(users[i], users[i + 1]);
            if (isNeedToSwap) {
                const temp = users[i];
                users[i] = users[i + 1];
                users[i + 1] = temp;
            }
        }
    }
}

function sortUserByField(users, getField) {
    for (let k = 0; k < users.length; k++) {
        for (let i = 0; i < users.length - 1; i++) {
            if (getField(users[i]) > getField(users[i + 1])) {
                const temp = users[i];
                users[i] = users[i + 1];
                users[i + 1] = temp;
            }
        }
    }
}

function printUsersToConsole(users) {
    console.log("*****************");
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        console.log(user);
    }
}
