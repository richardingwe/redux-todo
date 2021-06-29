import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import './TodoItem.css';

const TodoItem = ({ name, done, id }) => {
    const [checked, setChecked] = React.useState(done);

    const handleChange = (event) => {
        setChecked(!checked);
    };
    return (
        <div className='todoItem'>
            <Checkbox
                checked={checked}
                color='primary'
                onChange={handleChange}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <p className={done && 'todoItem--done'}>{name}</p>
        </div>
    );
};

export default TodoItem;
