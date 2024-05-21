import axios from 'axios'



export function servicios(){
    const baseId = "appl7VZtgQ5DKAdVZ"
    const baseURL = "https://api.airtable.com/v0/"
    const token = 'pathpGJJfDkmLCGgm.0760accdd0d574675d351d343cc90cfedc326a3d9776059611cc52561bf641e8'

    const get = async (table) => {
        const response = await axios({
            method:'get',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            url: `${baseURL}${baseId}/${table}`
        }).then(res => res)
        return response.data        
    }
    const post = async () => {
        const response = await axios({
            method:'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            url: `${baseURL}`
        }).then(res => res)
        return response.data        
    }

    return {get,post}
}