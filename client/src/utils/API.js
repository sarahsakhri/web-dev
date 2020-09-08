import axios from "axios";

var URL = "http://www.omdbapi.com";

export default {
    movie: function (title) {
        return axios.get(URL + "/?s=" + title + "&apikey=3165d07f");
    }

}
