// Set an item in LocalStorage
// LS.setItem('myKey', { name: 'John', age: 30 });

// Get an item from LocalStorage
// const myValue = LS.getItem<{ name: string, age: number }>('myKey');

// Remove an item from LocalStorage
// LS.removeItem('myKey');

// Clear all items from LocalStorage
// LS.clear();

export class LS {
  static setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  static clear(): void {
    localStorage.clear();
  }
}
