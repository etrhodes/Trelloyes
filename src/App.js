import React, { Component } from "react";
import List from "./List";
import "./App.css";
import STORE from "./store";

const newRandomCard = () => {
  const id =
    Math.random().toString(36).substring(2, 4) +
    Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: "lorem ipsum",
  };
};

// function omit(obj, keyToOmit) {
//   return Object.entries(obj).reduce(
//     (newObj, [key, value]) =>
//       key === keyToOmit ? newObj : { ...newObj, [key]: value },
//     {}
//   );
// }

function omit(obj, keyToOmit) {
  let { [keyToOmit]: _, ...rest } = obj;
  return rest;
}

class App extends Component {
  state = {
    lists: STORE.lists,
    allCards: STORE.allCards,
  };

  handleAddCard = (listId) => {
    console.log("Added a card");
    console.log(listId);
    const { lists, allCards } = this.state;
    const newCard = newRandomCard();
    console.log(lists);
    console.log(allCards);
    let results = lists.map((list) => {
      if (list.id === listId) {
        list.cardIds.push(newCard.id);
        return list;
      } else {
        return list;
      }
    });
    allCards[newCard.id] = newCard;
    console.log(results);
    this.setState({ lists: results, allCards });
  };

  handleDeleteCard = (cardId, listId) => {
    console.log("This got deleted");
    console.log(cardId, listId);
    const { lists, allCards } = this.state;
    console.log(lists);
    let results = lists.map((list) => {
      if (list.id === listId) {
        let cards = list.cardIds.filter((card) => card !== cardId);
        list.cardIds = cards;
        return list;
      } else {
        return list;
      }
    });
    // let update = omit(allCards, cardId);
    // console.log(update);
    // this.setState({ allCards: update });
    this.setState({ lists: results });
  };

  render() {
    const { lists, allCards } = this.state;
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {lists.map((list) => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map((id) => allCards[id])}
              addCard={this.handleAddCard}
              deleteCard={this.handleDeleteCard}
              listId={list.id}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
