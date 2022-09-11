import './app.scss'
import React from 'react';
import axios from 'axios';

import Task  from './components/Task/Task';
import AddTask from './components/AddTask/AddTask';

function App() {

  let url = 'https://631a57afdc236c0b1edc828d.mockapi.io/TASKS';
  let [array, setArray] = React.useState([])

  // получение данных
  React.useEffect(() => {
    dataUpdate();
  },[])

  // удаление данных (передаётся через пропсы)
  let onClickDel = async (id) => {
    await axios.delete(url + '/' + id)
    dataUpdate();
  }

  // запрос для обновления данных
  let dataUpdate = async() => {
    const { data } = await axios(url);
    await setArray(data);
    console.log(data);
  }

  return (
    <div className="App">
      <header>
        <div className="header_text">Your tasks</div>
      </header>

      <div className="Content">
        {array.map((obj)=> (<Task url = {url} key = {obj.id}check = {obj.check} content = {obj.content} onClickDel = {onClickDel} id = {obj.id}/>))}


        <AddTask url = {url} dataUpdate={dataUpdate}/>
      
      </div>
    </div>
  );
}

export default App;