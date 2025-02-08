import ErrorRepository from '../ErrorRepository';

describe('ErrorRepository', () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
  });

  test('должен возвращать описание ошибки по коду', () => {
    expect(errorRepo.translate(400)).toBe('Bad Request');
    expect(errorRepo.translate(404)).toBe('Not Found');
    expect(errorRepo.translate(500)).toBe('Internal Server Error');
  });

  test('должен возвращать "Unknown error" для неизвестного кода', () => {
    expect(errorRepo.translate(999)).toBe('Unknown error');
  });
});
