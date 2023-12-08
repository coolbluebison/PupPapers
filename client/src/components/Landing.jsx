import React from "react"
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';





function Landing() {


    
    
    return (

        <>
            <div>
                <h1>Are You a New Proud Pet Parent?</h1>
                <h2>Because Every Pup Deserves Their Special Day Documented</h2>


                <img id="pupPic" src="https://images.pexels.com/photos/5763578/pexels-photo-5763578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Puppy" />

                <h5>Capture The Moment</h5>
                <p>Your puppy's birthday isn't just another day; it's a milestone, a memory, a moment to cherish. </p>
                <p>Our application commemorates this special day with a custom certificate.</p>

                <Button size="lg" variant="soft" color="warning">
                    <Link to="/name">Lets Get Started</Link>
                </Button>
            </div>
        </>

    )
}


export default Landing



