

// ADDING EXPENSE ( ACTION TYPE )
export const add_exp = ({ id = 0, desc = '', note = '', amt = 0 } = {}) => ({
    type: 'adding',
    expp: {
        id, desc, note, amt
    }
});

//  REMOVING EXPENSE ( ACTION TYPE )
export const remo = ({id}) => ({
    type:'remove',
    expp : {id}
});

// EDITING EXPENSE ( ACTION TYPE )
export const edit = ({id,amt}) => ({
    type:'edit',id,amt
});
