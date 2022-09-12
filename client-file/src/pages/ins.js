import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation as ll } from 'react-router-dom';
import { createStore, combineReducers as cr } from 'redux';
// import { decodeToken} from "react-jwt";



function App() {
    const locc = ll();

    const navi = useNavigate();

    const [quote, setQuote] = useState([]);
    const [filtersz, setFiltersz] = useState('');
    // const ttk = decodeToken(dt.token);
    // console.log(ttk._id);

    function navigateHome() {
        navi('/');
    };

    function taskins() {
        navi('/taskinsert', { state: { id: locc.state.id } });
    };

    const removingall = (event,par)=>{
        fetch('http://localhost:5000/deleteall', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                par
            })
        })
            .then(res => res.json())
            .then((dt) => {
                if (dt.st !== "ok") {
                    throw `${dt.st}`;
                  }
                alert(`Deleted -: ${dt.mess} element`);
            })
            .catch((err) => {
                alert(Object.keys(err));
                console.log(err)
            });
    };

    const removing = (event, param) => {

        fetch('http://localhost:5000/delete', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                param
            })
        })
            .then(res => res.json())
            .then((dt) => {
                if (dt.st !== "ok") {
                    throw `${dt.st}`;
                  }
                alert(`Deleted -: ${dt.mess} element`);
            })
            .catch((err) => {
                alert(err);
                console.log(err)
            });
    };


    function registrys() {
        const token = locc.state.id;

        fetch('http://localhost:5000/dash', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then((dt) => {
                // setQuote(dt.mess);

                const demo = {
                    exp: dt.mess,
                    fil: { text: "", sort: "" }
                };

                const setext = (text = "") => ({
                    type: 'setext', text
                });

                // SORT BY AMOUNT
                const sortamt = () => ({
                    type: 'sortamt'
                });

                const sortid = () => ({
                    type: 'sortid'
                });

                function todo(state = demo.exp, action) {
                    switch (action.type) {
                        case 'adding':
                            return [...state, action.expp]
                        case 'remove':
                            return state.filter(({ id }) => id !== action.expp.id)
                        case 'edit':
                            return state.map((val) => {
                                if (val.id === action.id) {
                                    const amtt = action.amt;
                                    return { ...val, ...{ amt: action.amt } };
                                }
                                return val;
                            })
                        default:
                            return state
                    }
                };

                const filters = (state = demo.fil, action) => {
                    switch (action.type) {
                        case 'setext':
                            return { ...state, ...{ text: action.text } };
                        case 'sortamt':
                            return { ...state, ...{ sort: 'amt' } }
                        case 'sortid':
                            return { ...state, ...{ sort: 'id' } }
                        default:
                            return state
                    }
                };

                const store = createStore(
                    cr({
                        filterss: filters,
                        exppp: todo
                    })
                );

                const printt = (exp, { text, sort }) => {
                    return exp.filter((ele) => {
                        const textt = ele.desc.toLowerCase().includes(text.toLowerCase());
                        return textt;
                    }).sort((a, b) => {
                        if (sort === 'amt') {
                            return a.desc > b.desc ? 1 : -1;
                        }
                        else {
                            if (sort === 'id') {
                                return a.id < b.id ? 1 : -1;
                            }
                        }
                    });
                };


                // DISPLAYING GETSTATE VALUE AFTER EVERY DISPATCH ACTION METHOD
                store.subscribe(() => {
                    const val = store.getState();
                    const dis = printt(val.exppp, val.filterss);
                    setQuote(dis);
                });

                store.dispatch(setext(filtersz));
                store.dispatch(sortamt());

            })
            .catch((err) => {
                console.log(err);
            });
    };


    useEffect(() => {
        registrys();
    });

    return (

        <div className="App">
            <button onClick={event => removingall(event, quote[0]._id)}><u>Remove All Task</u></button><br/>
            <input value={filtersz} onChange={(e) => { setFiltersz(e.target.value) }}
                type="text" placeholder='Enter text to filter....' /><br />
            <ul>
                {quote.map((friend, index) => (
                    <li key={index}>
                        <span>Description: {friend.desc}</span>{" , "}
                        <span>Completed: {
                            friend.completed ? <span><u>Completed</u></span> : <span><u>Not Completed </u></span>
                        }
                        </span>{" , "}
                        <span>Status: {friend.status ? <span><u>Pending</u></span> : <span><u>Not Pending</u></span>}
                        </span>
                        <button onClick={event => removing(event, friend._id)}><u>Remove</u></button>
                    </li>
                )
                )}
            </ul>
            <button onClick={taskins}><u>Insert New Task</u></button>
            <button onClick={navigateHome}>Back to login</button><br />

        </div>
    );
}

export default App;
