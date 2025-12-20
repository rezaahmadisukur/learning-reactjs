import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
    const username = useLogin();
    return (
        <div>
            <h1>Profile</h1>
            <h3>Username : {username}</h3>
        </div>
    );
};

export default ProfilePage;
