import React from 'react';
import ToDoList from '../cmps/ToDoList';
import { nanoid } from 'nanoid';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoList: props.initialList,
            addValue: '',
            compFilterMode: '',
            leftFilterMode: '',
            activatedFilter: 'all'
        };
    };

    remove = (id) => {
        let newList = [...this.state.toDoList];
        newList = newList.filter((toDo) => {
            return toDo.id !== id
        });
        this.setState((state) => {
            this.state.toDoList = newList;
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
        let newList = [...this.state.toDoList];
        newList.push(toDo);
        this.setState((state) => {
            this.state.toDoList = newList;
            this.state.addValue = '';
            return state;
        });
    }
    }

    onCheck = (toDo) => {
        toDo.checked = !toDo.checked;
    }

    filterCompleted = () => {
        let newList = [...this.state.toDoList];
        newList = newList.filter((toDo) => {
            if(toDo.checked) {
                return toDo
            }
        });
        this.setState((state) => {
            this.state.compFilterMode =  this.state.toDoList;
            this.state.toDoList = newList;
            return state;
        });
    }

    filterAll = () => {
        console.log(this.state.compFilterMode);
        this.setState((state) => {
            this.state.toDoList = this.state.compFilterMode;
            return state;
        })
    }

    getFilteredTodos = ()=> {

    }

    render(){
        const { toDoList } = this.state;
        return(
            <div>
                <div className="mx-auto input-group input-group-sm mb-3" style={{width: "75%"}}>
                <input name="addValue" className='form-control' type="text" placeholder='What do you need to do today?' onChange={this.handleChange}/>
                <button onClick={() => this.add()} className='btn btn-primary'>Add</button>
                </div>

                <br />
                <ToDoList list={this.getFilteredTodos} remove={this.remove} onCheck={this.onCheck}></ToDoList>
                <br /> 

                <button className='ml-4 btn btn-primary' onClick={() => this.filterAll()} style={{marginLeft: "12.5%", marginRight: "10px"}} >ALL</button>
                <button className='btn btn-primary' onClick={() => this.filterCompleted()} style={{marginRight: "10px"}}>COMPLETED</button>
                <button className='btn btn-primary'>LEFT</button>

            </div>
        );
    }

}



export default Home