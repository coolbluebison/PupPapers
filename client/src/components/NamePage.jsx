import React, { useState }  from "react"
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';


function NamePage( {setName} ) {


    const [nameholder, setNameholder] = useState('')
    
    function handleNameChange (event) {
        setNameholder(event.target.value)
    }

    function handleSubmit() {
        setName(nameholder)
    }


    return (
        <>
            <h2> What is the name of the puppy?</h2>

            <Input
                placeholder="Type in here…"a
                sx={{
                    '&::before': {
                    display: 'none',
                    },
                    '&:focus-within': {
                    outline: '2px solid var(--Input-focusedHighlight)',
                    outlineOffset: '2px',
                    },
                }}
                onChange = { handleNameChange }
                value = { nameholder }
            /> 

            <br></br>

            <Button size="lg" 
                variant="soft" 
                color="warning"
                onClick= {handleSubmit}
            >
                <Link to="/birthday">Next</Link>
            </Button>  
                    
        </>
    )
}

export default NamePage

