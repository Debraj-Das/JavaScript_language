/*
if I use async before a function then it will return a promise

if I use await before a promise then it will wait for the promise to resolve and then assign the value to the variable of resolve value

if I not use await then asyc used as promise so you can use .then methed which callback 
method take the return values as a parameter

*/

async function temp() {
  const kokata = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(37);
    }, 3000);
  });
  const delhi = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(41);
    }, 7000);
  });
  console.log("kolata tempate fetching");
  const kol = await kokata; // await is used to wait for the promise to resolve and then assign the value to the variable of resolve value
  console.log(`kolata tempate is fetched ${kol}`);
  console.log("delhi tempate fetching");
  const del = await delhi;
  console.log(`delhi tempate is fetched ${del}`);
  return [kol, del];
}

async function temp2() {
  const mumbai = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(40);
    }, 1000);
  });
  const channi = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(32);
    }, 10000);
  });
  console.log("mumbai tempate fetching");
  const mum = await mumbai; // await is used to wait for the promise to resolve and then assign the value to the variable of resolve value
  console.log(`mumbai tempate is fetched ${mum}`);
  console.log("channi tempate fetching");
  const chan = await channi;
  console.log(`channi tempate is fetched ${chan}`);
  return [mum, chan];
}

// const city =  temp();
// const city2 = temp2();
// // await city2;

// city.then((res) => console.log(res));


async function city() {
    const city1 = temp();
    const city2 = temp2();
    const [kol, del] = await city1;
    const [mum, chan] = await city2;
    console.log(`kolata tempate is fetched ${kol}`);
    console.log(`delhi tempate is fetched ${del}`);
    console.log(`mumbai tempate is fetched ${mum}`);
    console.log(`channi tempate is fetched ${chan}`);
}

city();