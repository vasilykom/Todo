import React from 'react';
const TodoListItem =({label, important=false})=> {
    const style={
        color:important? 'tomato': 'black'
    };
    return(
        <span className="todo-list-item" >
              <span
                className="todo-list-item-label"
              style={style}>
            {label}
            </span>
            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    //onClick={onToggleImportant}>
                >
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              //onClick={onDelete}>
          >
        <i className="fa fa-trash"/>
      </button>
        </span>
    )
};

export default TodoListItem;