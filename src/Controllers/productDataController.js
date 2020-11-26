import axios from 'axios'

export const productDataService = (category_id) => {

    return axios.get("https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=" , {
        params: {
            category_id: category_id
        },
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })

}

