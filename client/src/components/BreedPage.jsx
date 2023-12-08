import React, { useState }  from "react"
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';



function BreedPage({setBreed}) {


    const [breedholder, setBreedholder] = useState('')
    
    function handleBreedChange (event) {
        setBreedholder(event.target.value)
    }

    function handleSubmit() {
        setBreed(breedholder)
    }


    return (
        <>
            <h2> What is breed of the puppy?</h2>

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

                onChange = { handleBreedChange }
                value = { breedholder }
            /> 

            <br></br>

            <Button size="lg" 
                variant="soft" 
                color="warning"
                onClick={handleSubmit}
            >
                <Link to="/gender">Next</Link>
            </Button>  
                    
        </>
    )
}

export default BreedPage

