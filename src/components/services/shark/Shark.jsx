import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Model } from "./Model"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"

const Shark = () => {
  return (
    <Canvas>
        <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5} >
            <Model />
        </Stage>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
        </Suspense>
    </Canvas>
  )
}

export default Shark;
