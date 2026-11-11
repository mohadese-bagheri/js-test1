// let arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr);


// let arr2 = [3, 3, 3];
// arr2.unshift(0, 1, 1);
// console.log(arr2);

// let arr = [2, 4, 5];
// let x = arr.find( num =>num >4);
// console.log(x);

// let arr = [2, 4, 5,6];
// let x = arr.filter(num => num > 4);
// console.log(x);

// let arr=[1,2,3,4,5,6];
// let double=arr.map( num => num *2);
// console.log(double);

// const user = { name: "mohi", age: 30, city: "babol" };

// console.log(Object.keys(user));

// console.log(Object.values(user));

// Object.entries(user).map(arr =>
//     console.log(arr));

// Object.entries(user).map(([key, val]) => {

//     console.log(key, val);
// }
// )

function greet(callback) {
    const username = "mohi";
    callback(username);
}

function sayhello(name) {
    console.log(`salam ${name}`);

}

greet(sayhello);
