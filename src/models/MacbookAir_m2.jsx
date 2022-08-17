import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

function shadeColor(color, percent) {
    var R = parseInt(color.substring(1, 3), 16)
    var G = parseInt(color.substring(3, 5), 16)
    var B = parseInt(color.substring(5, 7), 16)

    R = parseInt((R * (100 + percent)) / 100)
    G = parseInt((G * (100 + percent)) / 100)
    B = parseInt((B * (100 + percent)) / 100)

    R = R < 255 ? R : 255
    G = G < 255 ? G : 255
    B = B < 255 ? B : 255

    var RR = R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16)
    var GG = G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16)
    var BB = B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16)

    return '#' + RR + GG + BB
}

export default function Model(props) {
    const { nodes, materials } = useGLTF('/macbookAir_m2/scene.gltf')
    const darker = shadeColor(props.color, -20)
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
                position={[0, -0.02, -0.05]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.07}
            >
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group
                        position={[0.03, 0.2, -0.8]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <mesh
                            geometry={nodes.mesh_0.geometry}
                            material={materials.body}
                            rotation={[-0.32, 0, 0]}
                            material-color={props.color}
                        />
                        <mesh
                            geometry={nodes.mesh_0001.geometry}
                            material={materials.shiny_body}
                            rotation={[-0.32, 0, 0]}
                        />
                        <mesh
                            geometry={nodes.mesh_0003.geometry}
                            material={materials['Material.002']}
                            rotation={[-0.32, 0, 0]}
                        />
                        <mesh
                            geometry={nodes.mesh_0004.geometry}
                            material={materials.camera_glass}
                            rotation={[-0.32, 0, 0]}
                        />
                        <mesh
                            geometry={nodes.mesh_0005.geometry}
                            material={materials.black_borders}
                            rotation={[-0.32, 0, 0]}
                        />
                        <mesh
                            geometry={nodes.mesh_0006.geometry}
                            material={materials['Material.001']}
                        />
                        <mesh
                            // material-color={props.color}
                            geometry={nodes.mesh_0007.geometry}
                            material={materials.body_smooth}
                            rotation={[-0.32, 0, 0]}
                        />
                    </group>
                    <group
                        position={[0.03, 0.2, -0.8]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={0.14}
                    >
                        <mesh
                            geometry={nodes.Object_27.geometry}
                            material={materials.black_borders}
                        />
                    </group>
                    <group position={[0.03, 0.2, -0.8]} scale={0.12}>
                        <mesh
                            geometry={nodes.Object_13.geometry}
                            material={materials.body}
                        />
                        <mesh
                            geometry={nodes.Object_14.geometry}
                            material={materials.keys}
                        />
                        <mesh
                            geometry={nodes.Object_15.geometry}
                            material={materials.key_material}
                        />
                        <mesh
                            geometry={nodes.Object_16.geometry}
                            material={materials.key_material}
                        />
                        <mesh
                            geometry={nodes.Object_17.geometry}
                            material={materials.key_material}
                        />
                        <mesh
                            geometry={nodes.Object_18.geometry}
                            material={materials.key_material}
                        />
                        <mesh
                            geometry={nodes.Object_19.geometry}
                            material={materials.keyboard_bg}
                        />
                        <mesh
                            material-color={darker}
                            geometry={nodes.Object_20.geometry}
                            material={materials.body_smooth}
                        />
                        <mesh
                            geometry={nodes.Object_21.geometry}
                            material={materials.touch_id_chrome_ring}
                        />
                        <mesh
                            geometry={nodes.Object_22.geometry}
                            material={materials.rubber_pads}
                        />
                        <mesh
                            geometry={nodes.Object_23.geometry}
                            material={materials.rubber_pads}
                        />
                        <mesh
                            geometry={nodes.Object_24.geometry}
                            material={materials.usb_metal}
                        />
                        <mesh
                            geometry={nodes.Object_25.geometry}
                            material={materials.Black_plastic}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}
