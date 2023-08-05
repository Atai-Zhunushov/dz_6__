import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./page/mainPage/mainPage";
import UsersPage from "./page/users/usersPage";
import MathPage from "./page/mathPage/mathPage";


function App() {
    return (
       <div className='App'>
           <UsersPage/>
           <MathPage/>

       </div>
    );
}



export default App;
