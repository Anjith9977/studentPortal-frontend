import commonApi from './CommonApi'

const Baseurl = "https://studentportal-backend-3ccn.onrender.com/students"

// get students data
export const getApi=async()=>{
   return await commonApi('GET',Baseurl,{})
}

// Add students data
export const addApi=async(data)=>{
     return await commonApi('POST',Baseurl,data)
}

// Delete student
export const deleteApi=async(id)=>{
   return await commonApi("DELETE",`${Baseurl}/${id}`)
}

// get students for edit
export const getEditId=async(id)=>{
   return await commonApi("GET",`${Baseurl}/${id}`)
}

// edit Students
export const editApi=async(id,data)=>{
   return await commonApi('PUT',`${Baseurl}/${id}`,data)
}