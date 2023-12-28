import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Desk from '../models/desk'

const Home = () => {
  const adjustDeskForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let deskRotation = [-1.1, -1, 0];

     if (window.innerWidth < 768) {
      screenScale = 0.9, 0.9, 0.9;
      screenPosition = [0, -6.5, -43];
  } else {
      screenScale = 10, 10, 10;
      screenPosition = [0, -6.5, -43];
  }
  return [ screenScale, screenPosition, deskRotation ];
}

const [deskScale, deskPosition, deskRotation] = adjustDeskForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        POPUP
      </div> */}

      <Canvas className='w-full h-screen bg-transparent'
      camera={{near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
          <Desk
          position={deskPosition}
          scale={deskScale}
          rotation={deskRotation}
           />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home;