import axios from 'axios'

export const tabDataService = () => {

    return axios.get("https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob" , {
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })

}

