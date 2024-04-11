export default function guardrail(mathFunction) {
  const queue = [];
  let funcVal;
  try {
    funcVal = mathFunction();
  } catch (error) {
    queue.push(`Error: ${error.message}`);
    queue.push('Guardrail was processed');
    return queue;
  }
  queue.push(funcVal);
  queue.push('Guardrail was processed');

  return queue;
}
