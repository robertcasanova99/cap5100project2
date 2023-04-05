import { React, useState } from 'react'
import { styled } from '@mui/material/styles';
import Image from "material-ui-image";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';

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
    const description = props.description
    const amenities = props.amenities

    const [dialogOpen, setDialogOpen] = useState(false);

    let onFilterClickHandler = (e) => {
        setDialogOpen(true);
    }

    let dialogClosedHandler = (e) => {
        setDialogOpen(false)
    }

    return (
        <div>
            <Dialog
                modal="false"
                open={dialogOpen}
                onClose={dialogClosedHandler}
                >
                <Box sx={{
                    width:600,
                    height:340,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start'
                }}>
                    <Box sx={{
                        width:300,
                        height:300,
                        pt:1,
                        pl:1,
                    }}>
                        <Item>{name}</Item>
                        <Item><Image src={image}/></Item>
                    </Box>
                    <Box sx={{
                        width:300,
                        height:300,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}>
                        <Item sx={{p: 1, mt: 4, ml: 4, mr: 4, mb: 1}}>{description}</Item>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Item>{config}</Item>
                            <Item>{sqft} sq. ft.</Item>
                            <Item>{city}</Item>
                        </Box>
                        <Box sx={{
                            ml:1,
                            mt:2,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}>
                            {amenities.map((amenityNumber) => <Item>Amenity {amenityNumber}</Item>)}
                        </Box>
                    </Box>
                </Box>
            </Dialog>
            <Box onClick={onFilterClickHandler} sx={{
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
                <Item>${price} / mo.</Item>
            </Box>
        </div>
    )
}

export default ApartmentCard