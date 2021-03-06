import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { api } from '../../services/api';
import { Slider, Button, Typography, FormControl, MenuItem, Select, Divider } from '@material-ui/core';

const BurstEdit = props => {

    useEffect(() => {
        if (props.animation.id !== burst.id) {
            setBurst({
                ...props.animation
            })
        }
    })
  
    const [burst, setBurst] = useState({...props.animation})

    const handleInputChange = (name, value) => {
        setBurst({
                ...burst, 
                [name]: value
            })
    }

    const handleSubmit = () => {
        api.mojs.deleteMojs(props.animation.id,{
                animate_mo: {
                    ...burst
                }
            }
        )
            .then(resp => resp.json())
            .then(json => {
                props.dispatch({type: "HTTP_EDIT_BURST", animation: json})
            })
    }

    const handleDelete = () => {
        api.mojs.deleteMojs(props.animation.id)
            .then(resp => resp.json())
            .then(json => {
                props.dispatch(json)
            })
    }
    
    return (
        <>
        <div className="tool-burst">
            <div className="burst1">
            <h3>Burst</h3>
            <Button onClick={handleSubmit}>Save Burst</Button>
            <Button onClick={handleDelete}>Delete Burst</Button>
            <div>
                <FormControl>
                    <Select 
                        labelId="shape-select"
                        id="shape"
                        name="shape"
                        value={burst.shape} 
                        onChange={(e,v) => handleInputChange("shape", e.target.value)}>
                        <MenuItem value="circle" >Circle</MenuItem>
                        <MenuItem value="rect" >Rectangle</MenuItem>
                        <MenuItem value="polygon" >Polygon</MenuItem>
                        <MenuItem value="zigzag" >Zigzag</MenuItem>
                        <MenuItem value="curve" >Curve</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <Select 
                        labelId="color-select"
                        id="color"
                        name="color"
                        value={burst.color} 
                        onChange={(e,v) => handleInputChange("color", e.target.value)}>
                        <MenuItem value="red" >Red</MenuItem>
                        <MenuItem value="yellow" >Yellow</MenuItem>
                        <MenuItem value="pink" >Pink</MenuItem>
                        <MenuItem value="blue" >Blue</MenuItem>
                        <MenuItem value="cyan" >Cyan</MenuItem>
                        <MenuItem value="magenta">Magenta</MenuItem>
                    </Select>
                </FormControl>
            </div>
                <div className="burst2">
                    <Typography id="slider" gutterBottom>
                        Radius 1
                    </Typography>
                    <Slider
                        name="radius_1"
                        orientation="vertical"
                        value={burst["radius_1"]}
                        label="Radius 1"
                        valueLabelDisplay='auto'
                        onChange={(e,v) => handleInputChange("radius_1", v)} />
                    <Typography id="slider" gutterBottom>
                        Radius 2
                    </Typography>
                    <Slider 
                        name="radius_2"
                        orientation="vertical"
                        value={burst["radius_2"]}
                        label="Radius 2"
                        valueLabelDisplay='auto'
                        onChange={(e,v) => handleInputChange("radius_2", v)} />
                    <Typography id="slider" gutterBottom>
                        Count
                    </Typography>
                    <Slider 
                        name="count"
                        orientation="vertical"
                        value={burst.count}
                        label="Count"
                        max={20}
                        valueLabelDisplay='auto'
                        onChange={(e,v) => handleInputChange("count", v)} />
                    <Typography id="slider" gutterBottom>
                        Duration
                    </Typography>
                    <Slider 
                        name="duration"
                        value={burst.duration}
                        orientation="vertical"
                        label="Duration"
                        valueLabelDisplay='auto'
                        onChange={(e,v) => handleInputChange("duration", v)} />
                    <Typography id="slider" gutterBottom>
                        Angle
                    </Typography>
                    <Slider 
                        name="angle"
                        orientation="vertical"
                        value={burst.angle}
                        label="Angle"
                        valueLabelDisplay='auto'
                        onChange={(e,v) => handleInputChange("angle", v)} />
                </div>
            </div>
        </div>
        <Divider />
    </>
    )
}



export default connect()(BurstEdit)