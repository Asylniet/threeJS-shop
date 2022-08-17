import React, { lazy, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
    OrbitControls,
    Environment,
    ContactShadows,
    Html,
} from '@react-three/drei'
import Loading from './Loading'

const CanvasModel = ({ color, model, bought }) => {
    const Model = lazy(() => import(`../models/${model}`))
    return (
        <Canvas
            shadows
            camera={{
                position: [0, 0, 4],
                fov: 50,
            }}
        >
            <ambientLight intensity={0.3} />
            <directionalLight intenseity={1} position={[0, 10, 5]} castShadow />
            <directionalLight intenseity={0.5} position={[0, 0, -5]} />
            <Suspense
                fallback={
                    <Html>
                        <Loading dark={true} />
                    </Html>
                }
            >
                <Model scale={6} color={color} bought={bought} />
            </Suspense>
            <Environment preset="city" />
            <ContactShadows
                position={[0, -1, 0]}
                far={1}
                opacity={0.2}
                scale={10}
                blur={1.5}
            />
            <OrbitControls
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                enableZoom={false}
                enablePan={false}
            />
        </Canvas>
    )
}

export default CanvasModel
