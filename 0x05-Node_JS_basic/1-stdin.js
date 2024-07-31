process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) {
    console.log(`Your name is: ${input.trim()}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
