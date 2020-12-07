import {
    useParams
} from "react-router-dom";
import Axios from 'axios';

export default function Redirector(props) {

    let params = useParams();
    let id = params.id;
    let longURL = '';

    Axios.get('http://localhost:3000/api/url/'+id).then(response => {
        longURL = response.data.longURL;
        window.location.href = longURL;
      });
}