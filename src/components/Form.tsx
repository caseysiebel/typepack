import React from 'react';

import './styles/form.scss';

class Form extends React.Component {
    render() {
        return (
            <form className="form">
                <input type='text' />  
                <button>Submit</button>
            </form>
        );
    }
}

export default Form;
