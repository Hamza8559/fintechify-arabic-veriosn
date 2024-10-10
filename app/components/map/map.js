
"use client"
import React from 'react'
import {createRoot} from 'react-dom/client';
import {APIProvider, Map} from '@vis.gl/react-google-maps';

const map = () => {
  return (
     <div
      style={{
        borderRadius:'30px',
        width: '96.5vw',
        height: '100vh',
        margin:'15px',
        borderRadius:30,
        overflow: 'clip',
      }}
     >

    <APIProvider apiKey={'AIzaSyBIGuyCgI16-vUiVX4V7tkzDeIll0HUAGk'}>
    <Map
      style={{width: '96.5vw', height: '100vh' , 
      }}
      defaultCenter={{lat: 22.54992, lng: 0}}
      defaultZoom={3}
      gestureHandling={'greedy'}
    //   disableDefaultUI={true}s
    />
  </APIProvider>
  </div>

  )
}

export default map