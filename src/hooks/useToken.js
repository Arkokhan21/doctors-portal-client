import { useState, useEffect } from 'react';

const useToken = (email) => {

    const [token, setToken] = useState()

    // get jwt token from server and saved in local storage - 
    useEffect(() => {
        if (email) {
            fetch(`https://doctors-portal-server-opal.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken)
                        setToken(data.accessToken)
                    }
                })
        }
    }, [email])
    return [token];
}

export default useToken;