let name = 'Pasha';
let age = 12;
let isAdult = true;

let user = {
    name: 'Olga',
    age: 20,
    isWhoman: true
};
user.defaultGreetings = `My name: ${user.name}. I'm ${user.age} old`;

user.isWhoman = true;

//console.log(user);

let studentsNames = [1, 3, 54, 5];

studentsNames[1] = -9;

const create = function (name, age, isWhoman) {
    let user = {
        name: 'Ivan',
        age: 30,
        isWhoman: false
    };
    user.defaultGreetings = `My name: ${user.name}. I'm ${user.age} old`;
    return user;
}

var ivan = create('Ivan', 20, false);
var olga = create('Olga', 12, true);

const availableNames = ['Olga', 'Pasha', 'Lera', 'Ira', 'Emanuil'];

function generateUser() {
    let user = {};

    user.age = getRandomNumber(18, 50);
    user.name = getRandomName();
    user.isWhoman = getRandoBool();

    return user;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function getRandomName() {
    const lastIndex = availableNames.length - 1;
    return availableNames[getRandomNumber(0, lastIndex)];
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

printUsersToConsole(users);

const whonanCount = users
    .filter(user => user.isWhoman)
    .length;

console.log(`whoman [${whonanCount}/${totalUserCount}]`);

sortUserByAge(users);

printUsersToConsole(users);

//sortUserByName(users);
sortUserByField(users, (u) => u.name);

printUsersToConsole(users);

sortUserByField(users, (u) => u.isWhoman);

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
