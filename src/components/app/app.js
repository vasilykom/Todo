import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddTodoItem from '../add-todo-item';

import './app.css'

export default class App extends Component {

    state = {
        todoData: [
            {label: 'Drink Water', important: false, id: 0},
            {label: 'Make', important: true, id: 1},
            {label: 'Learn', important: false, id: 2}
        ]
    };

    deleteItem=(id)=>{
        console.log('id to delete:', id);
        this.setState(({todoData})=>{
            const idx=todoData.findIndex((el)=>el.id===id);
            //todoData.splice(idx,1)

            const arrayBefore=todoData.slice(0,idx);
            const arrayAfter=todoData.slice(idx+1);
            const newArray= [...arrayBefore,...arrayAfter];
            return{
                todoData:newArray
            }
            }
        )
    };

    createItem=()=>{
        console.log('create')
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
                          onDeleted={this.deleteItem}/>
                <AddTodoItem onCreated={this.createItem}/>
            </div>
        );
    }
}

