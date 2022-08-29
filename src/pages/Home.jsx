import React from 'react';
import ToDoList from '../cmps/ToDoList';
import { nanoid } from 'nanoid';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoArr: props.initialList,
            addValue: ''
        };
    };

    remove = (id) => {
        let newList = [...this.state.toDoArr];
        newList = newList.filter((toDo) => {
            return toDo.id !== id
        });
        this.setState((state) => {
            this.state.toDoArr = newList;
            return state;
        });
    }

    handleChange = (event) => {
        this.setState((state) => {
            state[event.target.name] = event.target.value || '';
            return state;
        })  
    }

    add = () => {
        if(!this.state.addValue || !this.state.addValue.length) {
            return;
        }
        else {
        const toDo = {
            id: nanoid(),
            title: this.state.addValue
        };
        let newList = [...this.state.toDoArr];
        newList.push(toDo);
        this.setState((state) => {
            this.state.toDoArr = newList;
            this.state.addValue = '';
            return state;
        });
    }
    }


    render(){
        const { toDoArr } = this.state;
        return(
            <div>
                <div className="mx-auto input-group input-group-sm mb-3" style={{width: "75%"}}>
                <input name="addValue" className='form-control' type="text" placeholder='What do you need to do today?' onChange={this.handleChange}/>
                <button onClick={() => this.add()} className='btn btn-primary'>Add</button>
                </div>

                <br />
                <ToDoList list={toDoArr} remove={this.remove}></ToDoList>
                <br /> 

                <button className='ml-4 btn btn-primary' style={{marginLeft: "12.5%", marginRight: "10px"}} >ALL</button>
                <button className='btn btn-primary' style={{marginRight: "10px"}}>COMPLETED</button>
                <button className='btn btn-primary'>LEFT</button>

            </div>
        );
    }

}



export default Home