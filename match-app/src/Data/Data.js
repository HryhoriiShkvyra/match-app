export const [userData, setUserData] = useLocalStorage([
        {id: 1, username: ''}
], 'key')

export const createNewUser = (newUserLogin) => {
    setUserData([...userData, newUserLogin])
}
    