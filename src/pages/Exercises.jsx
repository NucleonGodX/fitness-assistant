import { OrbitControls } from "@react-three/drei";
import { Model } from "../components/model";
import { Canvas } from "@react-three/fiber";
import { AmbientLight } from "three";

export default function Exercises(){
  return(<div className="canvas-container"><Canvas shadows camera={{position: [0,2,5], fov:30}}>
    <color attach="background" args={["#ececec"]}/>
  <OrbitControls/>
  <group position-y={-1}>
    <Model/>
    </group>
    <ambientLight intensity={1}/>
</Canvas></div>
    )
}