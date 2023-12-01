export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const someFunction = mathFunction();
    queue.push(someFunction);
  } catch (error) {
    queue.push(error.toString());
  }
  queue.push('Guardrail was processed');

  return queue;
}
