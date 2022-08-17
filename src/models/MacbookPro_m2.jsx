import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
    const { nodes, materials } = useGLTF('/macbookPro_m2/scene.gltf')
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
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.1}
            >
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[-1.45, 0.09, -0.57]}>
                        <mesh
                            geometry={nodes.Object_15.geometry}
                            material={materials['Material.011']}
                        />
                    </group>
                    <group position={[0, 0.1, -1.01]} rotation={[-1.92, 0, 0]}>
                        <group
                            position={[-0.03, 0.62, 1.02]}
                            rotation={[Math.PI, 0, Math.PI]}
                            scale={[32.94, 32.94, 33.49]}
                        >
                            <mesh
                                geometry={nodes.Object_23.geometry}
                                material={materials['Material.017']}
                            />
                        </group>
                        <mesh
                            geometry={nodes.Object_17.geometry}
                            material={materials['Material.003']}
                        />
                        <mesh
                            geometry={nodes.Object_18.geometry}
                            material={materials['Material.007']}
                        />
                        <mesh
                            geometry={nodes.Object_19.geometry}
                            material={materials['Material.006']}
                        />
                        <mesh
                            geometry={nodes.Object_20.geometry}
                            material={materials['Material.008']}
                        />
                        <mesh
                            geometry={nodes.Object_21.geometry}
                            material={materials['Material.010']}
                        />
                    </group>
                    <group
                        position={[-1.49, 0.09, -0.76]}
                        rotation={[0, 0, -Math.PI / 2]}
                        scale={-0.01}
                    >
                        <mesh
                            geometry={nodes.Object_28.geometry}
                            material={materials['Material.012']}
                        />
                    </group>
                    <mesh
                        geometry={nodes.Object_25.geometry}
                        material={materials['Material.003']}
                    />
                    <mesh
                        geometry={nodes.Object_26.geometry}
                        material={materials['Material.014']}
                    />
                    <mesh
                        geometry={nodes.Object_10.geometry}
                        material={materials['Material.005']}
                    />
                    <mesh
                        geometry={nodes.Object_11.geometry}
                        material={materials['Material.005']}
                    />
                    <mesh
                        geometry={nodes.Object_12.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        geometry={nodes.Object_13.geometry}
                        material={materials['Material.009']}
                    />
                    <mesh
                        geometry={nodes.Object_4001.geometry}
                        material={materials['Material.003']}
                        material-color={props.color}
                    />
                    <mesh
                        geometry={nodes.Object_5.geometry}
                        material={materials['Material.013']}
                    />
                    <mesh
                        geometry={nodes.Object_6001.geometry}
                        material={materials['Material.016']}
                    />
                    <mesh
                        geometry={nodes.Object_7.geometry}
                        material={materials['Material.004']}
                    />
                    <mesh
                        geometry={nodes.Object_8001.geometry}
                        material={materials['Material.005']}
                    />
                    <mesh
                        geometry={nodes.Object_9.geometry}
                        material={materials['Material.005']}
                    />
                </group>
            </group>
        </group>
    )
}
