import axios from "axios";


export default axios.create({
    baseURL: 'https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/',
    headers: {
        'X-RapidAPI-Key': '7e5df68bb1mshab73d6d7b939532p170d54jsn79c5f0f2b569',
        'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
    }
})
