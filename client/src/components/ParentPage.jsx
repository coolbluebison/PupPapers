import React, { useState }  from "react"
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';



function ParentPage({setParent}) {


    const [parentholder, setParentholder] = useState('')
    
    function handleParentChange (event) {
        setParentholder(event.target.value)
    }

    function handleSubmit() {
        setParent(parentholder)
    }


    return (
        <>
            <h2> What is the name of the parent(s)?</h2>

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

                onChange = { handleParentChange }
                value = { parentholder }
            /> 

            <br></br>

            <Button size="lg" 
                variant="soft" 
                color="warning"
                onClick={handleSubmit}
            >
                <Link to="/download">Next</Link>
            </Button>  
                    
        </>
    )
}

export default ParentPage

