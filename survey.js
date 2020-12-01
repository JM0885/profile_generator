const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer1) => {
  rl.question("What's your favourite hobby? ", (answer2) => {
    rl.question("What do you like to listen to? ", (answer3) => {
      rl.question("What's your favourite meal of the day? ", (answer4) => {
        rl.question("Are you into sports or more of an artsy person? ", (answer5) => {
  console.log(`My name is ${answer1}. My favourite hobby is ${answer2}. 
  I like listening to ${answer3}. My favourite meal of the day is ${answer4}. I am more of an ${answer5} person.`);
  rl.close();
            });
          });
        });
      });
    });