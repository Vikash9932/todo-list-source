import React  from 'react';
import axios from 'axios';
import  'bootstrap/dist/css/bootstrap.min.css';
import AddItem from './AddItem';
import TodoList from './TodoList';
import '../index.css';

class App extends React.Component{
    state = {items: '',
            filter:'all',
            isLoading: true};
    
    async componentDidMount(){
        const response = await axios.get('data/file.json');
        this.setState({items: response.data})
        this.setState({isLoading: false});     
    }

    addData = (term) =>{
        let id;
        if(this.state.items.length){
            id = this.state.items[this.state.items.length-1].id;
            id+=1;
        }
        else{
            id= 1;
        }
        this.setState({items: [...this.state.items, {id:id, item: term, isCompleted: false}]});
    }

    deleteData = (id) =>{
        const newList = this.state.items.filter((item)=>{return (item.id!==id)});
        this.setState({items: newList});
    }

    toggleCompletion = (id) =>{
        const updatedList = this.state.items.map(item => {if(item.id===id){item.isCompleted = !item.isCompleted} return item});
        this.setState({items:updatedList});
    }

   completedClick = () =>{
       this.setState({filter:'completed'});
   }

   activeClick = ()=>{
        this.setState({filter:'active'});
   }

   allClick = () =>{
        this.setState({filter:'all'});
   }

    render(){
        if(this.state.isLoading){
            return "Loading...";
        }
        return(
            <div className= "main" >
                <h2 align = "center" >ToDo List</h2>
                <br/>
                <span align = "center"><AddItem fetchData = {this.addData}/></span>
                <TodoList items = {this.state.items} deleteData = {this.deleteData} toggleCompletion= {this.toggleCompletion}
                completedClick = {this.completedClick} activeClick = {this.activeClick} allClick = {this.allClick} filter ={this.state.filter}/>           
            </div> 
        )
    }
}

export default App;





