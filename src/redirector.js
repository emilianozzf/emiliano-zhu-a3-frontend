import {
    useParams
} from "react-router-dom";
import Axios from 'axios';

export default function Redirector(props) {

    let params = useParams();
    let id = params.id;
    let longURL = '';

    Axios.get('https://emiliano-zhu-a3-backend.herokuapp.com/api/url/'+id).then(response => {
        longURL = response.data.longURL;
        window.location.href = longURL;
      });
}