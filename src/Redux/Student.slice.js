import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addApi, deleteApi, editApi, getApi, getEditId } from "../API/AllApi";
import { act } from "react";

export const fetchStudents = createAsyncThunk("student/fetchStudents",async()=>{
    const result =await getApi()
    console.log(result);
    return result.data

 })

// delete students

export const deleteStudents = createAsyncThunk('students/deleteStudents',async(id)=>{
      await deleteApi(id)
      return id
})

// add students

export const addStudents = createAsyncThunk('student/addStudents',async(data)=>{
         const result=await addApi(data)
         return result
})

// get edit  id

export const fetchEditId=createAsyncThunk('student/fetchEditId',async(id)=>{
    const result = await getEditId(id)
    return result.data
})

// edit syudent

export const editStudent=createAsyncThunk('student/editStudent',async({id,data})=>{
    const result = await editApi(id,data)
    return result.data
})


const StudentDetails = createSlice({
    name:"student",
    initialState:{
        loading:false,
        allstudents:[],
        dummystudents:[],
        selectedStudents:[],
        error:""
    },
    reducers:{
        searchStudents:(state,action)=>{
            state.allstudents=state.dummystudents.filter(item=>item.name.toLowerCase().includes(action.payload))
        }
        
 
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchStudents.pending,(state,action)=>{
            state.loading=true,
            state.allstudents=[],
            state.error=""
        })
        builder.addCase(fetchStudents.fulfilled,(state,action)=>{
            state.loading=false
            state.allstudents=action.payload
            state.dummystudents=action.payload
            state.error=""
        })
        builder.addCase(fetchStudents.rejected,(state,action)=>{
            state.loading=false,
            state.allstudents=[],
            state.error="failed to fetch students"
        })

        // delete students

        builder.addCase(deleteStudents.fulfilled,(state,action)=>{
            state.allstudents=state.allstudents.filter(dlt=>dlt.id !=action.payload)
        })

        // add students

        builder.addCase(addStudents.fulfilled,(state,action)=>{
            state.allstudents=action.payload
        })
        
        // get edit id 

        builder.addCase(fetchEditId.fulfilled,(state,action)=>{
            state.selectedStudents=action.payload
        })

        // editStudent

        builder.addCase(editStudent.fulfilled,(state,action)=>{
            state.selectedStudents=action.payload
        })

    }
})

export default StudentDetails.reducer
export const {searchStudents}=StudentDetails.actions