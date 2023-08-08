import NavBar from '../components/NavBar';

export default function Login() {
    return (
        <div>
            <NavBar />
            <section>
                <label htmlFor="in-user">Username:</label>
                <br></br>
                <input
                    type="text"
                    id="in-user"
                    name="in-user"
                />
                <br></br>
                <label htmlFor="in-pass">Password:</label>
                <br></br>
                <input
                    type="text"
                    id="in-pass"
                    name="in-pass"
                />
            </section>
        </div>
    );
}
