import axios from 'axios'



export function servicios(table){
    const baseId = "appl7VZtgQ5DKAdVZ"
    const baseURL = "https://api.airtable.com/v0/"

    const get = async () => {
        const response = await axios({
            method:'get',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            url: `${baseURL}/${baseId}/${table}`
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
}