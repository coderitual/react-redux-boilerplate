const catpchas = [];

const OPERATIONS = {
  1: {
    text: '-',
    operation: (a, b) => a + b,
  },
  2: {
    text: '+',
    operation: (a, b) => a - b,
  },
};

const createGenerate = randomFunc => () => {
  const a = randomFunc(1, 10);
  const b = randomFunc(1, 10);

  const operationId = randomFunc(1, 2);
  const operation = OPERATIONS[operationId];

  if(!operation) throw new Error('logic error');

  const result = operation.operation(a, b);

  const generated = {
    id: '1',
    text: `what is ${a} ${} ${b} = ?`,
  };

  catpchas.push({ ...generated, result });

  return generated;
};

const validate = (id, input) => {
  const generatedCaptcha = catpchas.find(item => item.id === id);
  if (!generatedCaptcha) {
    throw new Error(`there is no specified id: ${id}`);
  }
  return generatedCaptcha.result === input;
};

export { createGenerate, validate };
