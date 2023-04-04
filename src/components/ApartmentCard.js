import { React } from 'react'
import { styled } from '@mui/material/styles';
import Image from "material-ui-image";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function ApartmentCard(props) {
    const image = props.image
    const name = props.name
    const config = props.config
    const sqft = props.sqft
    const city = props.city
    const price = props.price

    return (
        <div>
            <Box sx={{
                width:300,
                height:400,
                '&:hover': {
                    opacity: [0.9, 0.8, 0.7]
                },
                pl: 1
            }}>
                <Item><Image src={image}/></Item>
                <Item>{name}</Item>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    pt:0.5
                }}>
                    <Item>{config}</Item>
                    <Item>{sqft} sq. ft.</Item>
                    <Item>{city}</Item>
                </Box>
                <Item>{price} / mo.</Item>
            </Box>
        </div>
    )
}

export default ApartmentCard