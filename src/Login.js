import React from 'react';
import apiClient from './services/Api';
import axios from 'axios';
const Login = (props) => {

    const [email, setEmail] = React.useState('');

    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        axios.defaults.withCredentials = true;
        apiClient.get('http://webpersonal/sanctum/csrf-cookie')
            .then(response => {
                apiClient.post('http://webpersonal/login', {
                    email: email,
                    password: password
                }).then(response => {
                    console.log(response)
                })
                .catch(error => console.error(error));
            });
            
}


    return (

        <div>

            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <input

                    type="email"

                    name="email"

                    placeholder="Email"

                    value={email}

                    onChange={e => setEmail(e.target.value)}

                    required

                />

                <input

                    type="password"

                    name="password"

                    placeholder="Password"

                    value={password}

                    onChange={e => setPassword(e.target.value)}

                    required

                />

                <button type="submit">Login</button>

            </form>

        </div>

    );

}
export default Login;