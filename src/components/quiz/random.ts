export class Random {
  static pick<T>(first: T[]): T;
  static pick<T>(first: T, ...args: T[]): T;
  static pick<T>(first: T, ...args: T[]): T {
    const options = !args?.length && Array.isArray(first) ? first : [first, ...args];
    return options[Random.integer(options.length)];
  }

  static key(obj: Record<string, any>) {
    return Random.pick(Object.keys(obj));
  }

  static coinflip() {
    return Math.random() > 0.5;
  }

  static order<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  /** Returns true  */
  static chance(probability: number) {
    return Math.random() < probability;
  }

  static integer(max: number) {
    return Math.floor(Math.random() * max);
  }
}
