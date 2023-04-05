import { React, useState } from 'react'
import { styled } from '@mui/material/styles';
import Image from "material-ui-image";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import GoogleMapReact from 'google-map-react';
import SchoolIcon from '@mui/icons-material/School';
import ApartmentIcon from '@mui/icons-material/Apartment';
import amenityNames from "./Amenities"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
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
    const phoneNumber = props.phoneNumber
    const coordinates = props.coordinates

    const [dialogOpen, setDialogOpen] = useState(false);

    let onFilterClickHandler = (e) => {
        setDialogOpen(true);
    }

    let dialogClosedHandler = (e) => {
        setDialogOpen(false)
    }

    const defaultProps = {
        center: {lat: 29.6436, lng: -82.3549}, 
        zoom: 10.8
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
                    height:390,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start'
                }}>
                    <Box sx={{
                        width:400,
                        height:390,
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
                        alignItems: 'center'
                    }}>
                        <Item sx={{p: 1, mt: 1, ml: 4, mr: 4, mb: 1}}>{description}</Item>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Item2>{config}</Item2>
                            <Item2>{sqft} sq. ft.</Item2>
                            <Item2>{city}</Item2>
                        </Box>
                        <Box sx={{
                            ml:1,
                            mt:1,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}>
                            {amenities.map((amenityNumber) => <Item2>{amenityNames[amenityNumber]}</Item2>)}
                        </Box>
                        <Box sx={{
                            alignSelf:'auto',
                            width:220,
                            height:140,
                            mb:-20
                        }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: process.env.REACT_APP_GMAPS_KEY }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                            <SchoolIcon fontSize='large'
                                lat={29.6436}
                                lng={-82.3549}
                            />
                            <ApartmentIcon fontSize='large'
                                lat={coordinates.latitude}
                                lng={coordinates.longitude}
                            />
                            </GoogleMapReact>
                            <Item sx={{}}>📞+ {phoneNumber}</Item>
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