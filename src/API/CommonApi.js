    import axios from "axios";

    const commonApi = async (method,url,data) =>{

        const result={
            method,
            url,
            data
        }
    return await axios(result).then(res=>{
            return res
        }).catch(err=>{
            return err
        })
    }

    export default commonApi