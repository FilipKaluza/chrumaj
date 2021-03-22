import axios from "axios";

const instanece = axios.create({
    baseURL: "https://chrumaj-1bbf4-default-rtdb.europe-west1.firebasedatabase.app/"
})

export default instanece;