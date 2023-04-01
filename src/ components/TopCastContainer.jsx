import React from 'react'
import { ActorCard } from './ActorCard'

export const TopCastContainer = () => {
  return (
    <section className='top-cast-container'>
        <h6>Top cast</h6>
        <div className='cards-container'>
            <ActorCard/>
        </div>
    </section>
  )
}

