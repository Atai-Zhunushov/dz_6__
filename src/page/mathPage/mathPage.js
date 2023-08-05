import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {changeCount} from "../../store/mathSlice";

const MathPage = () => {

    const [inputValues , setInputValue] = useState('')
    const [inputValue2 , setInputValue2] = useState('')

    const dispatch = useDispatch()

    const changeInputFunc = (e) => {
        setInputValue(+e.target.value)
    }
    const changeInputFunc2 = (e) => {
        setInputValue2(+e.target.value)
    }

    const {count} = useSelector(state => state.mathSlice)

    const plusFunc = () => {
       if (inputValues !== '' && inputValue2 !=='') {
           dispatch(changeCount(inputValues + inputValue2))
           setInputValue('')
           setInputValue2('')
       } else {
           alert('похоже вы сделали что то не так')
           dispatch(changeCount(0))
       }
    }

    const minusFunc = () => {
        if (inputValues !== '' && inputValue2 !=='') {
            dispatch(changeCount(inputValues - inputValue2))
            setInputValue('')
            setInputValue2('')
        } else {
            alert('похоже вы сделали что то не так')
            dispatch(changeCount(0))
        }
    }

    const multiplicationFunc = () => {
        if (inputValues !== '' && inputValue2 !=='') {
            dispatch(changeCount(inputValues * inputValue2))
            setInputValue('')
            setInputValue2('')
        } else {
            alert('похоже вы сделали что то не так')
            dispatch(changeCount(0))
        }
    }
    const divisionFunc = () => {
        if (inputValues !== '' && inputValue2 !=='') {
            dispatch(changeCount(inputValues / inputValue2))
            setInputValue('')
            setInputValue2('')
        } else {
            alert('похоже вы сделали что то не так')
            dispatch(changeCount(0))
        }
    }

    return (
       <div className="mathDiv">
           <div className="div_inp">
               <input type="number" onChange={changeInputFunc} value={inputValues}/>
               <input type="number" onChange={changeInputFunc2} value={inputValue2}/>
           </div>
           <div className="div_btn">
               <button onClick={plusFunc}>+</button>
               <button onClick={minusFunc}>-</button>
               <button onClick={multiplicationFunc}>*</button>
               <button onClick={divisionFunc}>/</button>
           </div>
           <div>
               <p style={{fontSize:25}}>{count}</p>
           </div>
       </div >
    );
};

export default MathPage;