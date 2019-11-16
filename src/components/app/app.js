import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css'

export default class App extends Component {

    state = {

        todoData: [
            {label: 'Drink Water', important: false, id: 0},
            {label: 'Make', important: true, id: 1},
            {label: 'Learn', important: false, id: 2}
        ]
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={this.state.todoData}
                          onDeleted={(id) => {
                              console.log('id to delete:', id)
                          }}/>
            </div>
        );
    }
}

