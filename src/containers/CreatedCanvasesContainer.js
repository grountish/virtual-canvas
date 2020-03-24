import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import './styles/CreatedCanvasesContainer.scss'
import CanvasCard from '../components/presentational/CanvasCard'
import { api } from '../services/api'

const CreatedCanvasesContainer = props => {

    const handleDelete = (id) => {
        api.canvas.deleteCanvas(id)
                            .then(resp => resp.json())
                            .then(json => {
                                if (json.message === "Successful") {
                                    setState(prevState => {
                                        return { data: [...prevState.data.filter(canvas => canvas.id !== id)]}
                                    })
                                }
    
                            })
    }

    const renderRows = () => {
        return props.canvases.map(canvas => {
            console.log(canvas)
            return (
                <li>
                    {/* <CanvasCard canvas={canvas} delete={() => handleDelete(canvas.id)}/> */}
                </li>
            )
        })
    }

    return (
        <>
            <h3>Created Canvases</h3>
            <div className="canvas-table">
                <ul>
                {renderRows()}
                </ul>
            </div>
        </>
    )
}

export default CreatedCanvasesContainer