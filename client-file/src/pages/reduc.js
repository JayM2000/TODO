import React from 'react';
import { createStore, combineReducers as cr } from 'redux';

// *************** imp ***********************

// // RAW OBJECT DATA
// const demo = {
//     exp: [{ id: 1234242, desc: "jan ", note: "heres pending.....", amt: 2350 }],
//     fil: { text: "", sort: "" }
// };

// // ADDING EXPENSE ( ACTION TYPE )
// const add_exp = ({ id = 0, desc = '', note = '', amt = 0 } = {}) => ({
//     type: 'adding',
//     expp: {
//         id, desc, note, amt
//     }
// });

// //  REMOVING EXPENSE ( ACTION TYPE )
// const remo = ({id}) => ({
//     type:'remove',
//     expp : {id}
// });

// // EDITING EXPENSE ( ACTION TYPE )
// const edit = ({id,amt}) => ({
//     type:'edit',id,amt
// });

// // WORKING WITH FILTERS ( FILT FUNCTION )
// const setext = (text = '') =>({
//     type:'setext',text
// });

// // SORT BY AMOUNT
// const sortamt = () => ({
//     type:'sortamt'
// });

// const sortid = () => ({
//     type:'sortid'
// });

// // FUNCTION EXPENSE
// function todo(state = demo.exp, action) {
//     switch (action.type) {
//         case 'adding':
//             return [...state, action.expp]
//         case 'remove':
//             return state.filter(({id}) => id !== action.expp.id)
//         case 'edit':
//             // return state.map((val) => val.id === action.expp.id ?{...val,...{amt:action.expp.amt}} :val ) 
//             return state.map((val) => {
//                 if(val.id === action.id) {
//                     const amtt=action.amt;
//                     return {...val, ...{amt:action.amt}};
//                 }
//                 return val;
//             })
//         default:
//             return state
//     }
// };

// // FUNCTION FILTER
// const filt = (state = demo.fil, action) => {
//     switch (action.type) {
//         case 'setext':
//             return {...state,...{text:action.text}};
//         case 'sortamt':
//             return {...state,...{sort:'amt'}}
//         case 'sortid':
//             return {...state,...{sort:'id'}}
//         default:
//             return state
//     }
// };

// // CREATING STORE
// const store = createStore(
//     cr({
//         exp: todo,
//         filter: filt
//     })
// );

// const printt = (exp,{ text,sort }) => {
//     return exp.filter((ele) => {
//         const textt = ele.desc.toLowerCase().includes(text.toLowerCase());
//         return textt;
//     }).sort((a,b)=>{
//         if(sort === 'amt') {
//             return a.amt > b.amt ? 1 : -1;
//         }
//         else {
//             if(sort === 'id') {
//             return a.id < b.id ? 1: -1;
//         }
//     }
//     });
// };


// // DISPLAYING GETSTATE VALUE AFTER EVERY DISPATCH ACTION METHOD

// store.subscribe(() => {
//     const val = store.getState();
//     const dis = printt(val.exp,val.filter);
//     console.log(dis);
// });



// // DISPATCH METHOD ( ACTION METHOD ) 
// const oneval=store.dispatch(add_exp({
//     desc: 'anvbc',
//     note: 'lajsk -->>> al@#!#',
//     id: 208190,
//     amt: 12089
// })
// );

// const twoval = store.dispatch(add_exp({
//     desc: 'avengers',
//     note: '#$#$@',
//     id: 9835,
//     amt: 56956
// })
// );

// store.dispatch(sortamt());

// // REMOVING VALUE
// // store.dispatch(remo({id:oneval.expp.id}));

// // EDITING VALUE
// store.dispatch(edit({id:twoval.expp.id,amt:5}));

// // SETING TEXT IN FILTERS FUNCTION
// store.dispatch(setext('an'));

// // store.dispatch(sortamt());
// // store.dispatch(sortid());


// // PRINTING VALUE GETSTATE
// console.log(store.getState());

// ***************************************** imp ******************************************88
import Apps from './expensel';

function Appload() {
    return <div>
        <u>in redux file.??</u>
        <Apps />
    </div>;
}

export default Appload;
