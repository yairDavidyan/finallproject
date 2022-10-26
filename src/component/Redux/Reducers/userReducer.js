import produce from 'immer';

const initialState = {
    user: {}
};


export default produce((state, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            { state.user = action.payLoad }
            break;
       
    }

}, initialState)