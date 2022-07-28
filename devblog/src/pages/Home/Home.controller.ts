import { useEffect, useState } from "react";

const HomeController = () => {

    const [avatar, setAvatar] = useState("")
    const [ searchText, setSearchText ] = useState('');
    const [ fetchStatus, setFetchStatus ] = useState(false)

    const fetchData = () => {
        return fetch('https://api.github.com/users/Emdien')
            .then((response) => response.json())
            .then((data) => setAvatar(data.avatar_url))
    }

    useEffect(() => {
        fetchData()
        .then(() => setFetchStatus(true))
    }, [])

    return { avatar, searchText, setSearchText, fetchStatus }
}

export default HomeController;