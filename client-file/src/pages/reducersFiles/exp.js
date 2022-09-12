
// RAW OBJECT DATA
const demo = {
    expense: [{ id: 1234242, desc: "jan ", note: "heres pending.....", amt: 2350 }]
};

// FUNCTION EXPENSE
export default function todo(state = demo.expense, action) {
    switch (action.type) {
        case 'adding':
            return [...state, action.expp]
        case 'remove':
            return state.filter(({id}) => id !== action.expp.id)
        case 'edit':
            // return state.map((val) => val.id === action.expp.id ?{...val,...{amt:action.expp.amt}} :val ) 
            return state.map((val) => {
                if(val.id === action.id) {
                    const amtt=action.amt;
                    return {...val, ...{amt:action.amt}};
                }
                return val;
            })
        default:
            return state
    }
};