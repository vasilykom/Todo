import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header/app-header'
import SearchPanel from './components/search-panel/search-panel'
import TodoList from './components/todo-list/todo-list'

const App=() => {
    const todoData=[
        {label:'Drink Coffee', important:false, id:0},
        {label:'Make', important:true, id:1},
        {label:'Learn', important:false, id:2}
        ];
    return(
    <div>
        <AppHeader/>
        <SearchPanel/>
        <TodoList todos={todoData}/>
    </div>
);
};
    ReactDOM.render(<App/>, document.getElementById('root'));