export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const res = mathFunction();
    queue.push(res);
    queue.push('Guardrail was processed');
  } catch (e) {
    const errorMessage = `Error: ${e.message}`;
    queue.push(errorMessage);
    queue.push('Guardrail was processed');
  }
  return queue;
}
