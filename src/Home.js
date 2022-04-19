import { useState } from 'react';

const Home = () => {
    const [listArray, setList] = useState([
    { toDoText: 'this is to do number 1', id: 1 },
    { toDoText: 'this is to do number 2', id: 2 },
    { toDoText: 'this is to do number 3', id: 3 }
    ]);

    const [newToDo, setNewToDo] = useState('');

    const deleteHandler = (id) => {
        let newList = listArray.filter(listArray => listArray.id !== id);
        setList(newList);
    }

 // why this no work?
    const inputHandler = (event) => {
        let newIndex = listArray.length+1;
        let addToDo = [newToDo, newIndex];
        let newList = [...listArray];
        newList.push(addToDo);
        setList(newList);
    };


    return ( 
        <div>
            <form>
                <input onChange={(event) => setNewToDo(event.target.value)} />  
                <button onClick={inputHandler}>add ToDo</button>        
            </form>

            <h2>{newToDo}</h2>
            <h2>{listArray.length}</h2>

            <div>
            {listArray.map((props) => (
                <div key={props.id}>
                    <h2>{ props.toDoText }</h2>
                    <button onClick={() => deleteHandler(props.id)}>delete ToDo</button>
                </div>

            ))} 
        </div>
        </div>
     );
}


export default Home;