import Character from '../Character';
import Team from '../Team';

describe('Team class', () => {
  let team;
  let char1; let char2; let
    char3;

  beforeEach(() => {
    team = new Team();
    char1 = new Character('Ivan', 10);
    char2 = new Character('Ron', 2);
    char3 = new Character('Slava', 15);
  });

  test('добавление персонажа в команду', () => {
    team.add(char1);
    expect(team.toArray()).toContain(char1);
  });

  test('ошибка при добавлении дубликата', () => {
    team.add(char1);
    expect(() => team.add(char1)).toThrow('Такой персонаж в команде уже существует');
  });

  test('добавление нескольких уникальных персонажей', () => {
    team.addAll(char1, char2, char3);
    expect(team.toArray()).toEqual(expect.arrayContaining([char1, char2, char3]));
  });

  test('ошибка при добавлении дубликатов через addAll', () => {
    team.addAll(char1, char2);
    expect(() => team.addAll(char1, char3, char2)).toThrow('Такой персонаж в команде уже существует');
  });

  test('конвертация в массив', () => {
    team.addAll(char1, char2);
    expect(Array.isArray(team.toArray())).toBe(true);
  });
});
