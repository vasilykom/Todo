import React, {Component} from 'react';
import './add-todo-item.css'

export default class AppTodoItem extends Component {

    render() {
        return (
            <div className='btn-group'>
                <input type="text"
                       className="form-control"
                       placeholder="Add a new todo"/>
                <button
                    type="button"
                    className="btn btn-info">
                    Add item
                </button>
            </div>

        );
    }
};