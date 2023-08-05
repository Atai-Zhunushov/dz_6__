import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeInputAction, changeTitle, clearInput , deleteTitle} from "../../store/titleSlice";
import {changeTitleWithParams} from "../../store/titleSlice";


const MainPage = () => {

    const {title , inputValue} = useSelector(state => state.titleReducer)
    const dispatch = useDispatch()

    const withParams = () => {
        dispatch(changeTitleWithParams(inputValue))

    }
    const changeInput = (e) => {
        dispatch(changeInputAction(e.target.value))
    }
    return (
        <div className="div_main">
            <h1>{title}</h1>
            <input type="text" value={inputValue} onChange={changeInput}/>
            <button onClick={() => dispatch(clearInput())}>clear</button>
            <button onClick={withParams}>add</button>
            <button onClick={() => dispatch(deleteTitle())}>delete title</button>
        </div>
    );
};

export default MainPage;