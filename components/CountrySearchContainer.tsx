import React from 'react'
import Heading from './Heading'
import { Box } from '@mui/material'
import CountrySearch from './CountrySearch'

const CountrySearchContainer = () =>{
    return(
        <Box>
         <Heading/>
         <CountrySearch/>
        </Box>
    )
}

export default CountrySearchContainer