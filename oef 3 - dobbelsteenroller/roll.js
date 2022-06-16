class Roll {
  #roll;
  #id;

  constructor(id, roll) {
    this.#id = id;
    this.#roll = roll;
  }

  get roll() {
    return this.#roll;
  }

  get id() {
    return this.#id;
  }

  toJSON() {
    return {
      roll: this.#roll,
      id: this.#id,
    };
  }
}

module.exports = Roll;
