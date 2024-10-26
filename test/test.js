import ErrorRepository from '../src/js/app.js';

test('ErrorRepository.translate, known error', () => {
  const er = new ErrorRepository();
  const result = er.translate(2);
  expect(result).toBe('Character data missing'); 
});

test('ErrorRepository.translate, unknown error', () => {
  const er = new ErrorRepository();
  const result = er.translate('some other error');
  expect(result).toBe('Unknown error');
});