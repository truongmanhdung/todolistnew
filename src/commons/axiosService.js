import axios from "axios";

class AxionsService {
    constructor() {
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSusscess,this.handleError);
        this.instance = instance;
    } 
    handleSusscess(res) {
        return res;
    }
    handleError(err) {
        return Promise.reject(err);
    }

    get(url) {
        return this.instance.get(url);
    }
}
export default new AxionsService();