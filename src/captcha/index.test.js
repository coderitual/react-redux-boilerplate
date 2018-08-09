import { createGenerate, validate } from './index';

const randomFunc = (min, max) => {
  return min;
};

test('captcha generates proper json data', () => {
  const expected = {
    id: '1',
    text: 'what is 1 - 1 = ?',
  };

  const generate = createGenerate(randomFunc);
  const actual = generate();
  expect(actual).toEqual(expected);
});

test('captcha validates good answers', () => {
  const generate = createGenerate(randomFunc);

  const resultCaptcha = generate();

  const actual = validate(resultCaptcha.id, 2);
  expect(actual).toBe(true);
});
