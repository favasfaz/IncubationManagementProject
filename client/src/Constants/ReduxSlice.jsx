import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { useEffect, useState } from 'react'


const initialState = {
    loading:false,
    users:[],
    error:''
}

export const allApplication = createAsyncThunk('users/allApplication',()=>{
    return axios({
        method:'get',
        url:'/allApps'
    })
    .then((res)=>res.data)
})

export const newApplication = createAsyncThunk('users/newApplication',()=>{
    return axios({
        method:'get',
        url:'/newApplication'
    })
    .then((res)=>res.data)
})

export const pendingApplication = createAsyncThunk('users/pendingApplication',()=>{
    return axios({
        method:'get',
        url:'/pendingApplication'
    })
    .then((res)=> res.data)
})

export const registeredApplication = createAsyncThunk('users/registeredApplication',()=>{
    return axios({
        method:'get',
        url:'/registeredApplication'
    })
    .then((res)=>res.data)
})

export const blockedApplication = createAsyncThunk('users/blockedApplication',()=>{
    return axios({
        method:'get',
        url:'/blockedApplication'
    })
    .then((res)=>res.data)
})



const userSlice = createSlice({
name : 'users',
initialState,
    // reducers : {
        
    //     pendingApplication:(state,action)=>{
    //         state.loading=true
    //         axios({
    //             method:'get',
    //             url:'/pendingApplication'
    //         })
    //         .then((res)=>{
    //             console.log(res.data);
    //         })
    //         .catch((err)=>{
    //             state.err=err.message
    //         })
    //     },
    //     registeredApplication:(state,action)=>{
    //         axios({
    //             method:'get',
    //             url:'/registeredApplication'
    //         })
    //         .then((res)=>state = res.data)
    //     },
    //     blockedApplication:(state,action)=>{
    //         axios({
    //             method:'get',
    //             url:'/blockedApplication'
    //         })
    //         .then((res)=>state = res.data)
    //     },
        

    // },
extraReducers:(builder)=>{
    builder.addCase(newApplication.pending,(state)=>{
        state.loading =true
    })
    builder.addCase(newApplication.fulfilled,(state,action)=>{
        state.loading = false
        state.users = action.payload
        state.error = ''
    })
    builder.addCase(newApplication.rejected,(state,action)=>{
        state.loading=false
        state.users = []
        state.error = action.error.message
    })
    builder.addCase(pendingApplication.fulfilled,(state,action)=>{
        state.loading = false
        state.users = action.payload
        state.error = ''
    })
    builder.addCase(registeredApplication.fulfilled,(state,action)=>{
        state.loading = false
        state.users = action.payload
        state.error = ''
    })
    builder.addCase(blockedApplication.fulfilled,(state,action)=>{
        state.loading = false
        state.users = action.payload
        state.error = ''
    })
    builder.addCase(allApplication.fulfilled,(state,action)=>{
        state.loading = false
        state.users = action.payload
        state.error = ''
    })
    
    
}


})

export default userSlice.reducer
// export const {pendingApplication} = userSlice.actions