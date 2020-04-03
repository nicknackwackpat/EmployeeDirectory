import axios from "axios";


export default {
    people: function() {
    return axios.get('https://randomuser.me/api/?results=20&nat=us&inc=id,picture,name,phone,email,dob')
        }
}