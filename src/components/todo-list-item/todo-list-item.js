import React, {Component} from 'react';

import './todo-list-item.css'

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };


    onLabelClick = () => {
        this.setState((state) => {
            return {
                done: !state.done
            };
        })
    };

    onToggleImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            };
        })
    };

    render() {
        const {label,onDeleted} = this.props;
        const {done} = this.state;
        const {important} = this.state;

        let className = 'todo-list-item';
        if (done) {
            className += ' done'
        }
        const style = {
            color: important ? 'green' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };


        return (
            <span className={className}>
              <span
                  className="todo-list-item-label"
                  style={style}
                  onClick={this.onLabelClick}>
                  {label}
            </span>

            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onToggleImportant}
            >
                <i className="fa fa-exclamation"/>
            </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={onDeleted}>
          <i className="fa fa-trash-o"/>
      </button>
        </span>
        )

    }

}
