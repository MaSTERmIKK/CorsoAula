//tre oggetti standardUser advancedUser admin con enum che fa da menù. Scelte da console. Chiedo inserimenti. Se sai password creo oggetto e chiedo dati. Quando ho 3 parametri li stampo
const secrets = require('./secrets');
const readline = require('readline-sync');

function createAdminUser(tuple:[string, string, boolean]) {
    let user:AdminUser = {
        name:tuple[0],
        email:tuple[1],
        married:tuple[2]
    }
    return user;
}
function createAdvancedUser(tuple:[string, string, boolean]) {
    let user:AdvancedUser = {
        name:tuple[0],
        email:tuple[1],
        married:tuple[2]
    }
    return user;
}
function createStandardUser(tuple:[string, string, boolean]) {
    let user:StandardUser = {
        name:tuple[0],
        email:tuple[1],
        married:tuple[2]
    }
    return user;
}

function toBoolean(input:string) {
    if(input === 'true')
        return true;
    if(input === 'false')
        return false;
    throw Error;
}

interface StandardUser {
    name:string,
    email:string,
    married:boolean
};

interface AdvancedUser extends StandardUser {};
interface AdminUser extends StandardUser {};

enum Users {
    Standard = 'Standard',
    Advanced = 'Advanced',
    Admin = 'Admin'
};

let selected:boolean = false;
let user:string = "";
let userType:Users = Users.Admin;

while(!selected) {
    user = readline.question('Inserisci il tipo di utente: ')
    if(user === Users.Admin) {
        selected = true;
        userType = Users.Admin;
    }
    else if(user === Users.Advanced) {
        selected = true;
        userType = Users.Advanced;
    }
    else if(user === Users.Standard) {
        selected = true;
        userType = Users.Standard;
    }
}

let password:string = readline.question(`Inserisci la password per ${user}: `)
console.log(secrets.adminPassword);

if(userType === Users.Admin && password === secrets.adminPassword) {
    console.log("Logged");
    let name:string = readline.question(`nome: `);
    let email:string = readline.question(`email: `);
    let married:boolean = toBoolean(readline.question(`married?: `));
    let data:[string, string, boolean] = [name, email, married];
    let user:AdminUser  = createAdminUser(data);
    console.log(user);
}
else if(userType === Users.Advanced && password === secrets.advancesPassword) {
    console.log("Logged");
    let name:string = readline.question(`nome: `);
    let email:string = readline.question(`email: `);
    let married:boolean = toBoolean(readline.question(`married?: `));
    let data:[string, string, boolean] = [name, email, married];
    let user:AdvancedUser  = createAdvancedUser(data);
    console.log(user);
}
else if(userType === Users.Standard && password === secrets.standardPassword) {
    console.log("Logged");
    let name:string = readline.question(`nome: `);
    let email:string = readline.question(`email: `);
    let married:boolean = toBoolean(readline.question(`married?: `));
    let data:[string, string, boolean] = [name, email, married];
    let user:StandardUser  = createStandardUser(data);
    console.log(user);
}
else
    console.log("Wrong password");

