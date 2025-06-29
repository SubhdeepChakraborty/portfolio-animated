import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Model } from "./Model"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"

const React = () => {
  return (
    <Canvas>
        <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.8} >
            <Model />
        </Stage>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.6} makeDefault />
        </Suspense>
    </Canvas>
  )
}

export default React;
