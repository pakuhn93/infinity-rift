export default function Login(){
    return (
        <div>
            <label for="user">Username:</label>
            <br></br>
            <input id="in-user" type="text" name="user"/>
            <br></br>
            <br></br>
            <label for="pass">Password:</label>
            <br></br>
            <input id="in-pass" type="text" name="pass"/>
        </div>
    );
}