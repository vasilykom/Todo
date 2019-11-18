import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddTodoItem from '../add-todo-item';

import './app.css'

export default class App extends Component {

    maxId = 100;
    state = {
        todoData: [
            this.createTodoItem('Drink water'),
            this.createTodoItem('Make'),
            this.createTodoItem('Sunday'),
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }

    }

    onToggleImportant = (id) => {
        console.log('important', id)
    };

    onToggleDone = (id) => {
        console.log('done', id);
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done}

            const newArray=[
                ...todoData.slice(0,idx),
                newItem,
                ...todoData.slice(idx+1)
            ];

        return{
            todoData: newArray
        }
        })

    };

    deleteItem = (id) => {
        console.log('id to delete:', id);
        this.setState(({todoData}) => {
                const idx = todoData.findIndex((el) => el.id === id);
                //todoData.splice(idx,1)

                const arrayBefore = todoData.slice(0, idx);
                const arrayAfter = todoData.slice(idx + 1);
                const newArray = [...arrayBefore, ...arrayAfter];
                return {
                    todoData: newArray
                }
            }
        )
    };

    addItem = (text) => {
        console.log('create', text);
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArray = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArray
            }
        })
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} doneItem={3}/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={this.state.todoData}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />
                <AddTodoItem onItemAdded={this.addItem}/>
            </div>
        );
    }
}

