import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUser, changeInput, clearInputs,deleteAll} from "../../store/usersSlice";
import User from "../../components/user";

const UsersPage = () => {

    const dispatch = useDispatch()

    const {inputValue , users} = useSelector(state => state.usersReducer)

    const changeInputFunc = (e) => {
        dispatch(changeInput(e.target.value))
    }

    const addUserFunc = () => {
        dispatch(addUser(inputValue))
    }
    return (
        <div>
            <input type="text" placeholder='name' onChange={changeInputFunc} value={inputValue}/>
            <button onClick={addUserFunc}>add user</button>
            <button onClick={() => dispatch(clearInputs())}>clear</button>
            <button onClick={() => dispatch(deleteAll())}>delete all</button>
            {users.map(user => <User name={user}/>)}

        </div>
    );
};

export default UsersPage;