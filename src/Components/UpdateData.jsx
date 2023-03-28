import { createSlice } from '@reduxjs/toolkit'

export const UpdateData = createSlice({
  name: 'user',
  initialState: {
    value: []
  },
  reducers: {
    
    storeUser: (state, action) => {
      state.value.push(action.payload)
    },

    deleteUser : (state,action)=>{
      state.value=state.value.filter((item,index)=>{
        if(index != action.payload.ind){
          return item;
        }
      })
    }
  }
})

// Action creators are generated for each case reducer function
export const {storeUser,deleteUser } = UpdateData.actions

export default UpdateData.reducer