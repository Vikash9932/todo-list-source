import React from 'react'
import { connect } from 'react-redux';
import { filterTodo } from '../reducers'

let enabledButton1 = "button-enabled",
    enabledButton2 = "button",
    enabledButton3 = "button";

const FilterOptions = (props) => {
    const allClick = () => {
        props.filterTodo('all')
        enabledButton1 = "button-enabled";
        enabledButton2 = "button";
        enabledButton3 = "button";
    }

    const activeClick = () => {
        props.filterTodo('active')
        enabledButton2 = 'button-enabled'
        enabledButton3 = "button"
        enabledButton1 = "button"
    }

    const completedClick = () => {
        props.filterTodo('completed')
        enabledButton3 = 'button-enabled'
        enabledButton2 = "button"
        enabledButton1 = "button"
    }

    // const toggleClick = (val) =>{
    //     props.filterTodo(val);

    // }

    return (
        <div>
            <div className="show">Show: </div>
            <button
                type="submit"
                className={enabledButton1}
                onClick={() => {
                    allClick();
                }}
            >
                All
            </button>
            <button
                type="submit"
                className={enabledButton2}
                onClick={() => {
                    activeClick();
                }}
            >
                Active
            </button>
            <button
                type="submit"
                className={enabledButton3}
                onClick={() => {
                    completedClick();
                }}
            >
                Completed
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filterTodos: state.filterReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterTodo: obj => dispatch(filterTodo(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterOptions)
