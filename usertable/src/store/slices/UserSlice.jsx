import  {createSlice} from '@reduxjs/toolkit';


const UserSlice = createSlice({
    name:"user",
    initialState:[],
    reducers: {
        addUser(state,action) {
            state.push(action.payload);
        },
        removeUser(state,action) {
                 state.splice(action.payload,1);
        },
        deleteUsers(state,action) {},
    },
});

 console.log(UserSlice.actions.addUser());

export default UserSlice.reducer;

export const {addUser,removeUser} = UserSlice.actions;