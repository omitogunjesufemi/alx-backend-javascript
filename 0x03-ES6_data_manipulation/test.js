const buffer = new ArrayBuffer(16);

if (buffer.byteLength === 16) {
  console.log('Yes, it is 16 bytes');
} else {
  console.log('Oh no, it is the wrong size');
}

const int32View = new Int32Array(buffer);

for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
  console.log(`Entry ${i}: ${int32View[i]}`);
}

console.log();

const int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log(`Entry ${i}: ${int16View[i]}`);
}
