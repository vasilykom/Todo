import React, {Component} from 'react';
import './add-todo-item.css'

export default class AppTodoItem extends Component {

    state={
        label:''
    };

    onLabelChange = (e) => {
     this.setState({
         label:e.target.value
     })
    };

    onSubmit=(e)=>{
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
    };

    render() {
        //const {onCreated} = this.props;
        return (

            <form className='add-todo-item d-flex'
            onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="Add a new todo"/>
                <button
                    className='btn btn-outline-secondary'
                    // onClick={onCreated}
                    //onClick={() => this.props.onItemAdded('Hello from items')}
                >
                    Add item
                </button>
            </form>

        );
    }
};