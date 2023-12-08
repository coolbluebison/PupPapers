import React, { useState }  from "react"
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';



function GenderPage( { setGender } ) {


    const [genderholder, setGenderholder] = useState('')
    
    function handleGenderChange (event) {
        setGenderholder(event.target.value)
    }

    function handleSubmit() {
        setGender(genderholder)
    }


    return (
        <>
            <h2> What is the gender of the puppy?</h2>

            <Input
                placeholder="Type in here…"
                sx={{
                    '&::before': {
                    display: 'none',
                    },
                    '&:focus-within': {
                    outline: '2px solid var(--Input-focusedHighlight)',
                    outlineOffset: '2px',
                    },
                }}

                onChange = { handleGenderChange }
                value = { genderholder }
            /> 

            <br></br>

            <Button size="lg" 
                variant="soft" 
                color="warning"
                onClick={handleSubmit}
            >
                <Link to="/parent">Next</Link>
            </Button>  
                    
        </>
    )
}

export default GenderPage

