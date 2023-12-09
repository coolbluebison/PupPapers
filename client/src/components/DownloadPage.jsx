import React, { useState }  from "react"
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';



function DownloadPage( { birthdate, name, breed, gender, parent } ) {



    function handleClick(e) {
        e.preventDefault()

        fetch ('http://127.0.0.1:5555/infopackage', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify( {
                'birthdate': birthdate,
                'name':name,
                'breed': breed,
                'gender': gender,
                'parent': parent 
            } ),
          })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            alert('The certificate is generating!')}
          )
          .catch(error => {
            console.error('Error:', error);
            alert('Error creating the certificate!');
          })
          console.log(birthdate)
    }

    return (
        <>
            <h2>Now we gathered enough information, let's make the certificate!</h2>
            <br />

            <Button 
                size="lg"
                variant="soft"
                color="warning"
                onClick={handleClick}
            >
                <Link to="/display">Next</Link>
            </Button>
        </>
    );
}
    
export default DownloadPage



