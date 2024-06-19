import  { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [coverImage, setCoverImage] = useState('');


    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            const file = files[0];
            if (name === 'avatar') {
                setAvatar(file);
            } else if (name === 'coverImage') {
                setCoverImage(file);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
               
        const form = new FormData();

        form.append('email', email);
        form.append('username', username);
        form.append('password', password);
        form.append('fullName', fullName);
        form.append('avatar', avatar);

        if (coverImage) form.append('coverImage', coverImage);

        try {
            const response = await axios.post('/api/v1/users/register', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .catch((error) => {
                console.error(error);
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="register-form">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>Full Name:</label>
                    <input type="text" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                </div>
                <div>
                    <label>Avatar:</label>
                    <input type="file" name="avatar" onChange={handleFileChange} required />
                </div>
                <div>
                    <label>Cover Image:</label>
                    <input type="file" name="coverImage" onChange={handleFileChange} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
