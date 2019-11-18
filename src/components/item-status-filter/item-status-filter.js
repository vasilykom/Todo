import React, {Component} from 'react';

import './item-status-filter.css'

const filterButtons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},

];
export default class onToggleImportant extends Component {
    render() {
        const buttons = filterButtons.map(({name, label}) => {

            return (

                <button
                    key={name}
                    type="button"
                    className="btn btn-info">{label}
                </button>

            )
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>

        );
    }
}