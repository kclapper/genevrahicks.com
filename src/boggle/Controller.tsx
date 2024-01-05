type Listener = (event: CustomEvent) => void;

type GameEvent = "gameOver" | "gameStart";

interface Controller {
  getLetters(): string[];
  addEventListener(eventType: GameEvent, handler: Listener): void;
  removeEventListener(eventType: GameEvent, handler: Listener): void;
  startNewGame(): void;
  endGame(): void;
}
