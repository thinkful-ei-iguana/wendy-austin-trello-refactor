import React, { Component } from "react";
import List from "./List";
import "./App.css";
import STORE from "./STORE";

class App extends Component {
  state = {
    lists: STORE.lists,
    allCards: STORE.allCards
  };

  //this needs to be called when a <card /> delete button clicked
  handleDeleteClick = ((id, listId) => {
    console.log(id, listId);
    const newCards = this.state.lists.filter(list => list.cardIds !== id);
    this.setState({
      lists: newCards
    });
    const newCardObj = omit(this.state.allCards, listId)
  });

  omit(obj, keyToOmit) {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
          key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
    );
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists.map(list => (
            <List
              key={list.id}
              listId={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              handleDelete={this.handleDeleteClick}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
