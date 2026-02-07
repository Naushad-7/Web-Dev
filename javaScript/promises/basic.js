console.log("this is basic of promises");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  console.log(a);
  if (a < 0.5) {
    reject("No the randome number was not supporting you");
    console.log("the code doesnt match the value so that is rejected");
  } else {
    setTimeout(() => {
      console.log("this will print the function after the time period");
      resolve("Done by webengine");
    }, 3000);
  }
});

prom1.then((a) => {
  console.log(a);
}).catch((err)=>{
    console.log(err);
});
