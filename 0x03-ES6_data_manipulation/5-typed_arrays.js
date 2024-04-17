export default function createInt8TypedArray(length, position, value) {
  const buffer = ArrayBuffer(length);

  const int8View = Int8Array(buffer);
}
