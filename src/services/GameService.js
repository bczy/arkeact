class GameService {
  constructor() {
    if (!GameService.instance) {
      GameService.instance = this;
    }

    return GameService.instance;
  }
}

export const gameService = new GameService();
Object.freeze(gameService);
