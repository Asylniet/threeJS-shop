import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
    const { nodes, materials } = useGLTF('/macbookPro_m1/scene.gltf')
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.rotation.z = (-0.5 + Math.sin(t / 1.5)) / 20
        ref.current.rotation.x = (3 + Math.cos(t / 4)) / 10
        ref.current.position.y = (-5 + Math.sin(t / 1.5)) / 10
        if (ref.current.scale.x <= props.scale) {
            ref.current.rotation.y += 0.2
            ref.current.scale.x =
                ref.current.scale.y =
                ref.current.scale.z +=
                    0.2
        } else {
            ref.current.rotation.y = Math.sin(t / 4) / 8
        }
    })
    const ref = useRef()
    return (
        <group {...props} dispose={null} ref={ref} scale={0}>
            <group
                position={[0, -0.01, 0]}
                rotation={[-Math.PI / 2, 0, 1.57]}
                scale={0.84}
            >
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[0.12, 0.01, 0]}>
                        <mesh
                            geometry={nodes.Object_8.geometry}
                            material={materials.MacBookPro}
                        />
                        <mesh
                            geometry={nodes.Object_6.geometry}
                            material={materials.MacBookPro}
                            rotation={[0, 0, -0.32]}
                        />
                    </group>
                    <mesh
                        geometry={nodes.Object_4.geometry}
                        material={materials.MacBookPro}
                    />
                </group>
            </group>
        </group>
    )
}
