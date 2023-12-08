import React, { useState } from "react"
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';


// imports for selects
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Grid from '@mui/joy/Grid';




function BirthdayPage({setBirthdate}) {

    // handling inputs
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')


    function handleDayChange(event, value)  {
        setDay(value)
    }
    function handleMonthChange(event, value)  {
        setMonth(value)
    }
    function handleYearChange(event, value)  {
        setYear(value)
    }

    function handleSubmit()  {
        const newBirthday = `${day} ${month} ${year}`
        setBirthdate(newBirthday)
    }


    return (
        <>

            <h2> What is the birthday of the puppy? (Estimated)</h2>

            <Grid container spacing={2} sx={{ flexGrow: 1 }}>

                <Grid xs={3}>
                    <Select
                        color="warning"
                        placeholder="Day"
                        size="sm"
                        variant="soft"
                        onChange={handleDayChange}
                        value={day}
                    >
                        <Option value='1'>1</Option>
                        <Option value='2'>2</Option>
                        <Option value='3'>3</Option>
                        <Option value='4'>4</Option>
                        <Option value='5'>5</Option>
                        <Option value='6'>6</Option>
                        <Option value='7'>7</Option>
                        <Option value='8'>8</Option>
                        <Option value='9'>9</Option>
                        <Option value='10'>10</Option>
                        <Option value='11'>11</Option>
                        <Option value='12'>12</Option>
                        <Option value='13'>13</Option>
                        <Option value='14'>14</Option>
                        <Option value='15'>15</Option>
                        <Option value='16'>16</Option>
                        <Option value='17'>17</Option>
                        <Option value='18'>18</Option>
                        <Option value='19'>19</Option>
                        <Option value='20'>20</Option>
                        <Option value='21'>21</Option>
                        <Option value='22'>22</Option>
                        <Option value='23'>23</Option>
                        <Option value='24'>24</Option>
                        <Option value='25'>25</Option>
                        <Option value='26'>26</Option>
                        <Option value='27'>27</Option>
                        <Option value='28'>28</Option>
                        <Option value='29'>29</Option>
                        <Option value='30'>30</Option>
                        <Option value='31'>31</Option>
                    </Select>
                </Grid>


                <Grid xs={6}>
                    <Select
                        color="warning"
                        placeholder="Month"
                        size="sm"
                        variant="soft"
                        onChange={handleMonthChange}
                        value={month}
                    >
                        <Option value='January'>January</Option>
                        <Option value='February'>February</Option>
                        <Option value='March'>March</Option>
                        <Option value='April'>April</Option>
                        <Option value='May'>May</Option>
                        <Option value='June'>June</Option>
                        <Option value='July'>July</Option>
                        <Option value='August'>August</Option>
                        <Option value='September'>September</Option>
                        <Option value='October'>October</Option>
                        <Option value='November'>November</Option>
                        <Option value='December'>December</Option>
                    </Select>
                </Grid>


                <Grid xs={3}>
                    <Select
                        color="warning"
                        placeholder="Year"
                        size="sm"
                        variant="soft"
                        onChange={handleYearChange}
                        value={year}
                    >
                        <Option value='2024'>2024</Option>
                        <Option value='2023'>2023</Option>
                        <Option value='2022'>2022</Option>
                        <Option value='2021'>2021</Option>
                        <Option value='2020'>2020</Option>
                        <Option value='2019'>2019</Option>
                        <Option value='2018'>2018</Option>
                        <Option value='2017'>2017</Option>
                        <Option value='2016'>2016</Option>
                        <Option value='2015'>2015</Option>
                        <Option value='2014'>2014</Option>
                        <Option value='2013'>2013</Option>
                        <Option value='2012'>2012</Option>
                        <Option value='2011'>2011</Option>
                        <Option value='2010'>2010</Option>
                        <Option value='2009'>2009</Option>
                        <Option value='2008'>2008</Option>
                        <Option value='2007'>2007</Option>
                        <Option value='2006'>2006</Option>
                        <Option value='2005'>2005</Option>
                        <Option value='2004'>2004</Option>
                        <Option value='2003'>2003</Option>
                        <Option value='2002'>2002</Option>
                        <Option value='2001'>2001</Option>
                        <Option value='2000'>2000</Option>
                        <Option value='1999'>1999</Option>
                        <Option value='1998'>1998</Option>
                        <Option value='1997'>1997</Option>
                        <Option value='1996'>1996</Option>
                        <Option value='1995'>1995</Option>
                    </Select>
                </Grid>

            </Grid>



            <br>
            </br>

            <Button size="lg" variant="soft" color="warning" onClick={handleSubmit}>
                <Link to="/breed">Next</Link>
            </Button>  
                    
        </>
    )
}

export default BirthdayPage

