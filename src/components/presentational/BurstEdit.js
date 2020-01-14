import React from 'react';
import { Form } from 'semantic-ui-react'

const BurstEdit = props => {

    const shapeOptions = [
        {text: "circle"},
        {text: "rect"},
        {text: "cross"},
        {text: "polygon"},
        {text: "zigzag"},
        {text: "curve"},
    ]
    return (
        <div className="animation-edit" >
            <Form >
                <label><h2>Burst</h2></label>
                <Form.Select placeholder={props.tool.shape} options={shapeOptions}/>
            </Form>
        </div>
    )
}

export default BurstEdit