export const initialState = {
    avatar:'',
    name: '',
    email: '',
    favorites:[],
    appointments:[]
};

export const UserReducer = (state, action) => {
    switch(action.type) {
        case 'setAvatar':
            return {...state, 
                avatar: action.payload.avatar, 
                name: action.payload.name, 
                email: action.payload.email};
            break;
        default:
            return state;
    }
}