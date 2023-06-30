import { useState, useEffect } from 'react';
import { shuffle } from 'lodash';

interface Card {
  id: number;
  value: string;
}

const Game = (): JSX.Element => {
  const assetDeckSize = 18;
  const level2DeckSize = 30;
  const level1DeckSize = 42;
  const level0DeckSize = 48;

  const [assetDeck, setAssetDeck] = useState<Card[]>([]);
  const [level2Deck, setLevel2Deck] = useState<Card[]>([]);
  const [level1Deck, setLevel1Deck] = useState<Card[]>([]);
  const [level0Deck, setLevel0Deck] = useState<Card[]>([]);

  const [assetDisplay, setAssetDisplay] = useState<Card[]>([]);
  const [level2Display, setLevel2Display] = useState<Card[]>([]);
  const [level1Display, setLevel1Display] = useState<Card[]>([]);
  const [level0Display, setLevel0Display] = useState<Card[]>([]);

  const [players, setPlayers] = useState<number>(2);
  const [playerCards, setPlayerCards] = useState<Card[][]>([]);

  useEffect(() => {
    const generateCards = (deckSize: number, prefix: string): Card[] => {
      return Array.from({ length: deckSize }, (_, index) => ({
        id: index + 1,
        value: `${prefix} Card ${index + 1}`,
      }));
    };

    const shuffleAndDisplay = (deck: Card[], setDisplay: (display: Card[]) => void) => {
      const shuffledDeck = shuffle(deck);
      const displayedCards = shuffledDeck.slice(0, 4);
      setDisplay(displayedCards);
      return shuffledDeck.slice(4);
    };

    const assetDeck = generateCards(assetDeckSize, 'Asset');
    const level2Deck = generateCards(level2DeckSize, 'Level 2');
    const level1Deck = generateCards(level1DeckSize, 'Level 1');
    const level0Deck = generateCards(level0DeckSize, 'Level 0');

    setAssetDeck(assetDeck);
    setLevel2Deck(level2Deck);
    setLevel1Deck(level1Deck);
    setLevel0Deck(level0Deck);

    setAssetDisplay(shuffleAndDisplay(assetDeck, setAssetDisplay));
    setLevel2Display(shuffleAndDisplay(level2Deck, setLevel2Display));
    setLevel1Display(shuffleAndDisplay(level1Deck, setLevel1Display));
    setLevel0Display(shuffleAndDisplay(level0Deck, setLevel0Display));
  }, []);

  const replenishDisplay = (
    deck: Card[],
    setDeck: (deck: Card[]) => void,
    display: Card[],
    setDisplay: (display: Card[]) => void
  ) => {
    if (deck.length === 0) return;

    const replenishedCard = deck[0];
    const updatedDeck = deck.slice(1);
    setDeck(updatedDeck);

    const updatedDisplay = [...display, replenishedCard];
    setDisplay(updatedDisplay);
  };

  const handlePickCard = (
    deck: Card[],
    setDeck: (deck: Card[]) => void,
    display: Card[],
    setDisplay: (display: Card[]) => void,
    playerIndex: number
  ) => {
    if (display.length === 0) return;

    const pickedCard = display[0];
    const updatedDisplay = display.slice(1);
    setDisplay(updatedDisplay);

    const updatedPlayerCards = [...playerCards];
    updatedPlayerCards[playerIndex] = updatedPlayerCards[playerIndex]
      ? [...updatedPlayerCards[playerIndex], pickedCard]
      : [pickedCard];
    setPlayerCards(updatedPlayerCards);

    replenishDisplay(deck, setDeck, display, setDisplay);
  };

  const handlePickFromLevel0 = (playerIndex: number) => {
    if (level0Deck.length === 0) return;
    const pickedCard = level0Deck[0];
    const updatedDeck = level0Deck.slice(1);
    setLevel0Deck(updatedDeck);

    const updatedPlayerCards = [...playerCards];
    updatedPlayerCards[playerIndex] = updatedPlayerCards[playerIndex]
      ? [...updatedPlayerCards[playerIndex], pickedCard]
      : [pickedCard];
    setPlayerCards(updatedPlayerCards);

    replenishDisplay(level0Deck, setLevel0Deck, level0Display, setLevel0Display);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Card Game</h1>
      <div className="mb-4">
        <label htmlFor="players" className="mr-2">
          Players:
        </label>
        <select
          id="players"
          value={players}
          onChange={(e) => setPlayers(Number(e.target.value))}
          className="px-2 py-1 border border-gray-300 rounded-md"
        ><option value={2}>2 Players</option>
          <option value={3}>3 Players</option>
          <option value={4}>4 Players</option>
          <option value={5}>5 Players</option>
          <option value={6}>6 Players</option>
        </select>
      </div>
      <div className="grid grid-rows-4 gap-4">
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-xl font-bold mb-4">Asset Deck</h2>
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-md mb-2"
            onClick={() => handlePickCard(assetDeck, setAssetDeck, assetDisplay, setAssetDisplay, 0)}
          >
            Pick Card
          </button>
          <div className="flex"> {/* Added 'flex' class */}
            <div className="flex"> {/* Added 'flex' class */}
              {assetDisplay.slice(0, 4).map((card) => ( // Limiting the array to only four elements
                <div key={card.id} className="bg-white rounded-md p-2 text-center">
                  {card.value}
                </div>
              ))}
            </div>

          </div>

        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-xl font-bold mb-4">Level 2 Deck</h2>
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-md mb-2"
            onClick={() => handlePickCard(level2Deck, setLevel2Deck, level2Display, setLevel2Display, 0)}
          >
            Pick Card
          </button>
          <div className="flex"> {/* Added 'flex' class */}

            {level2Display.slice(0, 4).map((card) => (
              <div key={card.id} className="bg-white rounded-md p-2 text-center">
                {card.value}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-xl font-bold mb-4">Level 1 Deck</h2>
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-md mb-2"
            onClick={() => handlePickCard(level1Deck, setLevel1Deck, level1Display, setLevel1Display, 0)}
          >
            Pick Card
          </button>
          <div className="flex"> {/* Added 'flex' class */}

            {level1Display.slice(0, 4).map((card) => (
              <div key={card.id} className="bg-white rounded-md p-2 text-center">
                {card.value}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-xl font-bold mb-4">Level 0 Deck</h2>
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-md mb-2"
            onClick={() => handlePickFromLevel0(0)}
          >
            Pick Card
          </button>
          <div className="flex"> {/* Added 'flex' class */}

            {level0Display.slice(0, 4).map((card) => (
              <div key={card.id} className="bg-white rounded-md p-2 text-center">
                {card.value}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Player Cards</h2>
        {playerCards.map((playerHand, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-md mb-4">
            <h3 className="text-lg font-bold mb-2">Player {index + 1}</h3>
            {playerHand.map((card) => (
              <div key={card.id} className="bg-white rounded-md p-2 text-center">
                {card.value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;