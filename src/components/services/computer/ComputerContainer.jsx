import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Computer } from "./Computer"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"

const ComputerContainer = () => {
  return (
    <Canvas>
        <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5} >
            <Computer />
        </Stage>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
        </Suspense>
    </Canvas>
  )
}

export default ComputerContainer;
