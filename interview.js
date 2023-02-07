// var x = 10;
// function print() {
//     console.log(x)
//     var x = 20;
// }
// print()

//////////////////////////////////////////////////

// let x = 20;
// function print() {
//     var x = 15;
//     console.log(x)S
// }
// console.log(x)
// print()

/////////////////////////////////////////////////

// let x = 20;
// function print() {
//     let x = 15;
//     console.log(x)
// }
// console.log(x)
// print()

///////////////////////////////////////////////////

// const person = {
//     name: "usman",
//     address: {
//         street: "street 1",
//         house: "587"
//     }
// }
// const person2 = {...person}
// person.name = "ali"
// person.address.street = "Street 2"
// console.log(person)
// console.log(person2)


////////////////////////////////////////////////

// let calc = {
//     result: 0,
//     add(num) {
//     },
//     sub(num) {
//     }
// }
// calc.add(10).sub(5);
// console.log(calc.result)


////////////////////////////////////////////////


// let obj = {
//     fun1() {
//         console.log(this);
//     },
//     a : fun2 = () => {
//        console.log(this); 
//     }
// }

// console.log(obj.fun1());


////////////////////////////////////////////////////


// let keepCalling = true;
// setTimeout(function () {
//     keepCalling = false;
// }, 1000);

// while (keepCalling) {
//     console.log('in while loop')
// }

// const apiCall = (time) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve(1)
//         },time)
//     })
// }

// async function callApi() {
//     await apiCall();
//     console.log("date 1",new Date())
// }
// // callApi()
// // setTimeout(() => {
// //     callApi()
// // }, 1000)
// console.log("date 2", new Date())
// var startTime = Date.now();
// while ((Date.now() - startTime) < 5000) {
// }



////////////////////////////////////////////////////////////


// this keyword
// let calc = {
//     result: 0,
//     add(num) {
//         this.result = this.result + num;
//         return this;
//     },
//     sub(num) {
//         this.result = this.result - num;
//         return this;
//     },
//     mul(num) {
//         this.result = this.result * num;
//         return this;
//     },
//     div(num) {
//         this.result = this.result / num;
//         return this;
//     },
//     ans() {
//         return this.result;
//     }
// }
// const ans = calc.add(10).sub(5).mul(4).div(10).ans();
// console.log(ans)


// const state = {
//     name: 'usman',
//     age: 12
// }



///////////////////////////////////////////////////////////// asked to sir


// case nameUpd:
// return { ...state, action.payload.name }
// case nameUpd:
// state.name = action.payload.name
// return state


// fetch(api)
// fetch(api)


///////////////////////////////////


// const [number, setnumber] = React.useState(0)   


// function increment() {
//     setnumber(number + 1)
//     console.log(number);
// }

// <button onClick={increment} >click me</button>


/////////////////////////////////////////////////////////////

// const increment = () => {
//      setnumber(number + 1)
//      setnumber(number - 5)
//      setnumber(number + 3)
// }

// console.log(number);

///////////////////////////////////////////////////////////////



// const increment = () => {
//   const f = async () => {
//     await setnumber(number + 1)
//     await setnumber(number - 5)
//     await setnumber(number + 3)
//   }
//   f()
// }


// console.log(number)


////////////////////////////////////////////////////////////////







// for (let i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), i)
// }


// for (var i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), i)
// }


////////////////////////////////


// typeof typeof typeof({})

////////////////////////////

// var keepCalling = true

// setTimeout(function () {
//   keepCalling = false
// }, 3000)

// console.log(keepCalling)


/////////////////////////////////////////////////////////

// [
//   { name: 'usman', age : 5 },
//   { name: 'jahanzaib', age: 8 },
//   {name : 'suleman' , age : 6}
// ]

// ['jahanzaib' , 'suleman']

////////////////////////////////////////////////////////////

// function abc() {
//   let a = b = 6

//   a++

//   return a
// }

// abc()

// console.log(a);
// console.log(b);

///////////////////////////////////////////////////////////////

// while (keepCalling) {
//   console.log('asdf')
// }

///////////////////////////////////

// const maxnumber = Math.max.apply("", [3, 6, 3, 5, 67]);

// console.log(maxnumber);

///////////////////////////////////////////////////////////////

// const a = {
//   fist: "azher",
//   last: "saeed",
//   findName(state) {
//     console.log(this.fist, this.last, state);
//   },
//   mymethod: function (state) {
//     console.log(this.fist, this.last, state);
//   },
// };

// const b = {
//   fist: "jahanzaib",
//   last: "ch",
// };

// a.findName.call(b , 'lahore')
// a.mymethod.apply(b, ['isb'])

///////////////////////////////////////////////////////////////////////////

// function Car(type, fuelType) {
//   (this.type = type), (this.fuelType = fuelType);
// }

// function setBrand(brand) {
//   Car.call(this, "convertible", "petrol");
//   this.brand = brand;
//   console.log("car detail", this);
// }

// const newBrand = new setBrand("branch 1");

// console.log(newBrand);

/////////////////////////////

// function addup() {

//     let args = Array.from(arguments)

//     this.x = args.reduce((prev, curr) => prev + curr, 0)

//     console.log(this);
// }

///////////////////////////////////////////////////////////////

// function derivedFun(){
//     let obj = {
//         inps : [1,2,3,4,5,6,7,8]
//     }

//     addup.apply(obj , obj.inps)

// }

// derivedFun()

///////////////////////////////

// function startFunction(file) {
//   return new Promise((resolve, reject) => {
//       if (reject) {
//           console.log("uncomplete function");
//         }
//         return file
//   });
// }

// startFunction('azher').then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


//////////////////////////////////////////////

// console.time('azher');
// for (let i = 0; i < 10; i++) {
//  console.log(i)
// }
// console.timeLog('azher')
// console.timeEnd('azher');


//////////////////////////////////////////

// function rotateArray(inputArray , rotation) {


//   const rotatedArray = inputArray

//   for (let i = 0; i < rotation; i++){
//     const arrayItem = rotatedArray.shift()


//     rotatedArray.push(arrayItem)

//   }

//   return rotatedArray
// }



// let inputArray = [1,2,3,4,5]
// let outputAray = [5, 4, 3, 2, 1]



// console.log(rotateArray(inputArray, 4));


//////////////////////////////////////////


// change objct but not string or number in array

// const person = [{ name: "Usman" }, 24];
// const result = person.slice();


// result[0].name = "Akbar";
// result[1] = 34;

// console.log(person);
// console.log(result);


/////////////////////////////////////////////


// function findEvenOdd(num) {
//     even | odd
// }

// findEvenOdd(5)

////////////////////////////////////////





// React.useEffect(() => console.log('use Effect'), [])
// React.useLayoutEffect(() => console.log('useLayoutEffect'), [])
// React.useMemo(() => console.log('useMemo'), [])
// React.useCallback( () => console.log('useCallback'), [])




// const promise = new Promise(res => res(2));
// promise.then(v => {
//     console.log(v);
//     return 'one';
// })
//     .then(v => {
//         console.log(v);
//         return 'two';
//     })
//     .finally(v => {
//         console.log(v);
//         return 'three';
//     })
//     .then(v => {
//         console.log(v);
//     });




// const input = [
//     {
//         name: "person1",
//         city: "city1"
//     },
//     {
//         name: "person2",
//         city: "city1"
//     },
//     {
//         name: "person3",
//         city: "city2"
//     },
//     {
//         name: "person4",
//         city: "city3"
//     }
// ]
// const output = {
//     'city1': [
//         {
//             name: "person1",
//             city: "city1"
//         },
//         {
//             name: "person2",
//             city: "city1"
//         },
//     ],
//     'city2': [
//         {
//             name: "person3",
//             city: "city2"
//         },
//     ],
//     'city3': [
//         {
//             name: "person4",
//             city: "city3"
//         }
//     ]
// }

// const changeProblem = (arr) => {
//     return arr.reduce((curr, next) => {
//         if (curr[next.city]) {
//             curr[next.city].push(next)
//         }
//         else {
//             curr[next.city] = [next]
//         }
//         return curr
//     }, {})

// }

// const result = changeProblem(input)
// console.log(result)
//////////////////////////////////////////////

// [1, 2, 3].reduce((a, b, c) => a + b + c)

/////////////////////////////////////////////////

// const [a, setA] = useState(() => 0);
// setA(1);
// console.log(a)


////////////////////////////////////////////////

// stata = { name: "" }
// state.name = 'ZAPTA'

///////////////////////////////////////////////
// Write a program that takes an array of integers, for example[2, 5, 9, 11, 15], and a target sum, for example 17. The program should return the pair of elements from the array whose sum equals the target sum.In this case, the elements that add up to the target sum of 17 would be 2 and 15.
////////////////////////////////////////


// function countChars(str) {
//     let charCount = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str.charAt(i);
//         if (charCount.hasOwnProperty(char)) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }
//     return charCount;
// }

// let string = "hello world";
// let charCount = countChars(string);
// console.log("Character count in " + string + ": ", charCount);

/////////////////////////////////////////////////////

// function countChar(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) === char) {
//             count++;
//         }
//     }
//     return count;
// }

// let string = "hello world";
// let char = "l";
// console.log("Number of occurrences of " + char + " in " + string + " = " + countChar(string, char));

/////////////////////////////////////


// async function fetchedData(){
//     await api() // 2 Sec
//     await api() // 2 Sec
//     await api() // 2 Sec
// }


