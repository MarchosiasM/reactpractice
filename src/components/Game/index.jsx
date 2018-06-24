import React from 'react';
import CharacterCard from '../CharacterCard';
import Characters from '../characters.json';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      UsedChars: [],
      ShuffledCharacters: [...Characters],
    };
    this.shuffleArray = this.shuffleArray.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  /**
  * Shuffles array in place. ES6 version
  * @param {Array} a items An array containing the items.
  */
  shuffleArray() {
    const { ShuffledCharacters: wArray } = this.state;
    for (let i = wArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [wArray[i], wArray[j]] = [wArray[j], wArray[i]];
    }
    this.setState({ ShuffledCharacters: wArray });
  }

  handleClick(name) {
    this.shuffleArray();
    const { UsedChars, score } = this.state;
    for (let i = 0; i < UsedChars.length; i += 1) {
      console.log(UsedChars);
      console.log(name);
      console.log('Attempting to find a match');
      if (name === UsedChars[i]) {
        console.log('Found a match!');
        /* eslint-disable */
        alert('You lost!');
        /* eslint-enable */
        this.gameHandler('loss');
        return false;
      }
    }
    this.setState({ UsedChars: [...UsedChars, name], score: score + 1 });
    if (score === 11) {
      this.gameHandler('win');
    }
    return true;
  }

  /*
  * Is this loss?
  */
  gameHandler(condition) {
    if (condition === 'loss') {
      this.setState({
        UsedChars: [],
        score: 0,
      });
    }
  }


  render() {
    const { ShuffledCharacters, UsedChars } = this.state;
    const arrayOne = ShuffledCharacters.slice(0, 4);
    const arrayTwo = ShuffledCharacters.slice(4, 8);
    const arrayThree = ShuffledCharacters.slice(8, 12);
    return (
      <div>
        <div>
          {
            arrayOne.map(character => (
              <CharacterCard
                name={character.name}
                avatar={character.avatar}
                key={character.name}
                onClick={this.handleClick}
              />
            ))
          }
        </div>
        <div>
          {
            arrayTwo.map(character => (
              <CharacterCard
                name={character.name}
                avatar={character.avatar}
                key={character.name}
                onClick={this.handleClick}
              />
            ))
          }
        </div>
        <div>
          {
            arrayThree.map(character => (
              <CharacterCard
                name={character.name}
                avatar={character.avatar}
                key={character.name}
                onClick={this.handleClick}
              />
            ))
          }
        </div>
        <div>
          {UsedChars}
        </div>
      </div>);
  }
}

export default Game;
