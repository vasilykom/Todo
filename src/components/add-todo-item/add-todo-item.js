import React, {Component} from 'react';
import './add-todo-item.css'

export default class AppTodoItem extends Component {


    render() {
        //const {onCreated} = this.props;
        return (

            <div className='add-todo-item'>
                {/*<input type="text"
                       className="form-control"
                       placeholder="Add a new todo"/>*/}
                <button
                    className='btn btn-outline-secondary'
                    // onClick={onCreated}
                    onClick={() => this.props.onItemAdded('Hello from items')}
                >
                    Add item
                </button>
            </div>

        );
    }
};