import React from "react";
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Reg from "./pages/reg.js";
import Login from "./pages/login.js";
import Ins from "./pages/dash.js";
import Dashh from "./pages/ins.js";
import Redu from './pages/reduc';



class App extends React.Component {

    render() {

        return <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/reg" exact element={<Reg />} />
                    <Route path="/" exact element={<Login />} />
                    <Route path="/dash" exact element={<Dashh />} />
                    <Route path="/taskinsert" exact element={<Ins />} />
                    <Route path="/reduc" exact element={<Redu />} />
                </Routes>
            </BrowserRouter>

        </div>;
    }
}

export default App;

