import axios from 'axios';
import React, { useState } from 'react';

const ImageUpload = () => {
    const [image, setImage] = useState('');

    function handleImage(e) {
        console.log(e.target.files);
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    }

    function handleApi() {
        const formData = new FormData();
        formData.append('image', image);

        axios.post('http://localhost:3001/recherche', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((res) => {
            console.log(res);
            // Handle success, e.g., display a success message to the user
        })
        .catch((error) => {
            console.error('Error uploading image:', error.response ? error.response.data : error.message);
            // Handle error, e.g., display an error message to the user
        });
    }

    return (
        <div>
            <input type="file" name="file" onChange={handleImage} />
            <button onClick={handleApi}>Télécharger</button>
        </div>
    );
};

export default ImageUpload;
