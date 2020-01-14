const sentence = "hello there from lighthouse labs";
let x = 100;

const typewriter = () => {
 
  
    for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, x);
    x += 100;
  }

};
typewriter()


setTimeout(() => {  
console.log('')  
},x+1);

