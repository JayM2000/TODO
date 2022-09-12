
// RAW OBJECT DATA
const demo = {
    fil: { text: "", sort: "" }
};

// FUNCTION FILTER
export default (state = demo.fil, action) => {
    switch (action.type) {
        case 'setext':
            return {...state,...{text:action.text}};
        case 'sortamt':
            return {...state,...{sort:'amt'}}
        case 'sortid':
            return {...state,...{sort:'id'}}
        default:
            return state
    }
};