import { useState } from "react";
import propTypes from 'prop-types';
import React from 'react';

const FORM_INITIAL_DATA = {
    'title': '',
    'description': '',
    'is_complete': false,
};

const NewTaskForm = ({onFormSubmit}) => {

    const [formData, setFormData] = useState(FORM_INITIAL_DATA)

    const handleChange = (event) => {
        const newTaskData = {
            'title': event.target.value,
            'description': '',
            'is_complete': false,
        };
        setFormData(newTaskData);
    };

    const handleSubmit = (event) => {
        // console.log(event.target.value);
        event.preventDefault();
        onFormSubmit(formData);
        setFormData(FORM_INITIAL_DATA);
      };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title"> New Task </label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange}/>
            <input type="submit"></input>
        </form>
        </div>
    );
};

NewTaskForm.propTypes = {
    onFormSubmit: propTypes.func.isRequired
}

export default NewTaskForm;