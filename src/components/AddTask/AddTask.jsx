import axios from 'axios';
import React from 'react';
import './AddTask.scss'

function AddTask(props){
    
    // реф для обращения к валью
    let inputValue = React.useRef();

    // удаление инпут валью
    let delInput = () => {
        inputValue.current.value = ''
    }

    // добавление на сервер
    let add = () => {
        if (inputValue.current.value === ''){
            alert('INPUT FIELD IS EMPTY')}
        else{
            addToDB();
            props.dataUpdate();
        }
    }

    let addToDB = async () => {
        await axios.post(props.url, {check: false, content: inputValue.current.value});
        props.dataUpdate();

        inputValue.current.value = '';
    }



    return(
        
        <div className="AddTask">

            <button className="change_button blue_btn" onClick={add}> + </button>
            <input type="text" ref={inputValue} className='input_add'/>
            <button className="change_button red_btn" onClick={delInput} >X</button>

        </div>


    )
}

export default AddTask;