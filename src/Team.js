export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж в команде уже существует');
    }
    this.members.add(character);
  }

  addAll(...members) {
    members.forEach((member) => this.add(member));
  }

  toArray() {
    return Array.from(this.members);
  }
}
