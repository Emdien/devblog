import { useEffect, useState } from "react";

const HomeController = () => {

    const [avatar, setAvatar] = useState("")

    const fetchData = () => {
        return fetch('https://api.github.com/users/Emdien')
            .then((response) => response.json())
            .then((data) => setAvatar(data.avatar_url))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { avatar }
}

export default HomeController;