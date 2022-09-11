import './Task.scss'
import axios from 'axios';
import React from 'react';



function Task(props){

    let [change, setChange] = React.useState(props.check);


    let onDeleteClick = () => {
        props.onClickDel(props.id);
    }

    let onApplyChanges = () => {
        console.log('Changes aplied');
    }

    // апдейт чека, (так как сервер отвечает долго а обновления чекбокса отображены я не делаю запрос)
    let onChangeCB = (event) => {
        axios.put(props.url + '/' + props.id, {check: event.target.checked});
        setChange(!change);
    }
 
    let trueStyle = {textDecoration: "none"};
    let falseStyle = {textDecoration: "line-through"};

    return(
        <div className="Task">

            <div className="task_content">
                <input type="checkbox" className='CheckBox' defaultChecked={props.check} onChange={onChangeCB} />

                <div className="change_block">
                    <input type="text" className='changeTask'/>
                    <button className='change_button green_btn' onClick={onApplyChanges}>✔</button>
                </div>

                <div className='task_text' style={change ? falseStyle : trueStyle}>{props.content}</div>

            </div>

            <div className="change_buttons">
                <button className='change_button red_btn' onClick = {onDeleteClick}>X</button>
                {/* <button className='change_button blue_btn' onClick = {()=> {console.log("will be changed")}}>✎</button> */}
            </div>

        </div>
    )
}

export default Task;