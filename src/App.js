import React, { Component } from "react";
import List from "./List";
import "./App.css";
import STORE from "./STORE";

class App extends Component {
  state = {
    store: STORE
  };

  //this needs to be called when a <card /> delete button clicked
  handleDeleteClick = id => {
    console.log("click");
  };

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.store.allCards[id])}
              handleDelete={this.handleDeleteClick}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
