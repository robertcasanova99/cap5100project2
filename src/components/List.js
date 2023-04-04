import { React } from 'react'
import data from "./ListData.json"
import Box from '@mui/material/Box';
import ApartmentCard from "./ApartmentCard"

function List(props) {
    //create a new array by filtering the original array
    // const filteredData = data.filter((el) => {
    //     //if no input the return the original
    //     if (props.input === '') {
    //         return el;
    //     }
    //     //return the item which contains the user input
    //     else {
    //         return el.text.toLowerCase().includes(props.input)
    //     }
    // })
    const apartmentCards = data.map((apartmentData) => 
        <ApartmentCard
            image={apartmentData.image}
            name={apartmentData.name}
            config={apartmentData.config}
            sqft={apartmentData.sqft}
            city={apartmentData.city}
            price={apartmentData.price}
        />
    );
    return (
        <div>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {apartmentCards}
            </Box>
        </div>
    )
}

export default List