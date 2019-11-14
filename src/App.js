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
  handleDeleteClick = (id, listId) => {
    console.log(id,listId,'handleDeleteClick');
    let copiedList = [...this.state.lists];
    copiedList.forEach((list,index) => {
      if(list.id === listId){
        copiedList[index].cardIds = copiedList[index].cardIds.filter(cardID=>cardID!==id);
      }
    });
    
    this.setState({
      lists: copiedList
    });
  };

  omit(obj, keyToOmit) {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
        key === keyToOmit ? newObj : { ...newObj, [key]: value },
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
