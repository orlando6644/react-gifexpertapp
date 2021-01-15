import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGriditem } from './GifGriditem';

export const GifGrid = ({category}) => {

    const {loading,data:images} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            { loading && <p>Cargando</p>}
            <div className="card-grid">

                {
                    images.map((img) => (
                        <GifGriditem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}
