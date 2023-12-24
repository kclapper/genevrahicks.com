export class BoggleController {
  static #instance = null;

  static getInstance() {
    if (BoggleController.#instance == null) {
      BoggleController.#instance = new BoggleController();
    }
    return BoggleController.#instance;
  }

  constructor() {
    this.letters = this.generateLetters();
    this.endTime = Date.now();
    this.listeners = {
      gameOver: new Set(),
      gameStart: new Set()
    };
  }

  generateLetters() {
    const length = 16;
    const letters = new Array(length);

    letters[0] = this.randomPick("EAEANG");
    letters[1] = this.randomPick("UOIMTC");
    letters[2] = this.randomPick("REYVLD");
    letters[3] = this.randomPick("WENHEG");
    letters[4] = this.randomPick("KPSFFA");
    letters[5] = this.randomPick(["Qu","U","I","H","M","N"]);
    letters[6] = this.randomPick("IESNEU");
    letters[7] = this.randomPick("LDIREX");
    letters[8] = this.randomPick("OOBJAB");
    letters[9] = this.randomPick("PACHOS");
    letters[10] = this.randomPick("RLNZNH");
    letters[11] = this.randomPick("TSYTDI");
    letters[12] = this.randomPick("STISOE");
    letters[13] = this.randomPick("WRVTHE");
    letters[14] = this.randomPick("TOWTOA");
    letters[15] = this.randomPick("REYLTT");

    return letters;
  }

  randomPick(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  randomLetter() {
    let charCode = Math.floor(Math.random() * 26) + 65
    return String.fromCharCode(charCode);
  }

  getLetters() {
    return this.letters;
  }

  startNewGame() {
    this.letters = this.generateLetters();
    this.endTime = new Date(Date.now() + (3 * 60 * 1000));

    const event = new CustomEvent('gameStart', { detail: {
      letters: this.letters,
      endTime: this.endTime
    } })

    this.updateListeners('gameStart', event);
  }

  endGame() {
    this.endTime = new Date();

    const event = new CustomEvent('gameOver', { detail: {
      letters: this.letters,
      endTime: this.endTime
    } })

    this.updateListeners('gameOver', event);
  }

  updateListeners(eventType, event) {
    for (const listener of this.listeners[eventType]) {
      listener(event);
    }
  }

  addEventListener(eventName, listener) {
    if (this.listeners[eventName] == undefined) {
      return;
    }
    this.listeners[eventName].add(listener);
  }

  removeEventListener(eventName, listener) {
    if (this.listeners[eventName] == undefined) {
      return;
    }
    this.listeners[eventName].delete(listener);
  }
}
