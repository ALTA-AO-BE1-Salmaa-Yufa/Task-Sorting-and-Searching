function playingDomino(hand, deck) {
    let suggestedCard = [];
    let maxCount = 0;
  
    for (let card of hand) {
      if (card.includes(deck[0]) || card.includes(deck[1])) {
        let count = card[0] === card[1] ? 2 : 1;
        if (count > maxCount) {
          maxCount = count;
          suggestedCard = card;
        }
      }
    }
  
    return suggestedCard;
  }

console.log(playingDomino([[6, 5], [3, 4], [2, 1], [3, 3]], [4, 3]))
console.log(playingDomino([[6, 5], [3, 3], [3, 4], [2, 1]], [3, 6]))
console.log(playingDomino([[6, 6], [2, 4], [3, 6]], [5, 1]))

