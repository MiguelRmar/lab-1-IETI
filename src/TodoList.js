import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    } 

    render() {
        const list = this.props.TodoList;
        const elements = list.map((element, index) => (
            <li key={index}>
                {<Todo
                        text={element.text}
                        dueDate={element.dueDate}
                        priority={element.priority}
                    />}
            </li>
        ));
        return <ul>{elements}</ul>
    }
}