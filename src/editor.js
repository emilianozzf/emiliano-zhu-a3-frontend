import {
    useParams
} from "react-router-dom";
import Axios from 'axios';

export default function Editor(props) {

    let params = useParams();
    let id = params.id;
    let longURL = '';

    return (
    <div>
        <h2>Edit for {id}</h2>
        <label for="name">Long URL:</label>
        <input name="name" onChange={(e) => {longURL=e.target.value}}></input>
        <button onClick={() => {
            Axios.put('https://emiliano-zhu-a3-backend.herokuapp.com/api/url/'+id, {_id: id, longURL: longURL})
        }}>Submit</button>
        <button onClick={() => {
            Axios.delete('https://emiliano-zhu-a3-backend.herokuapp.com/api/url/'+id)
        }}>Delete</button>
    </div>
    );
}