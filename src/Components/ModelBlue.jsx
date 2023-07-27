/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 mi19A_Blue.glb -T -M
*/

import React, { useRef, useEffect, useState } from "react";
import { Html, PresentationControls, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { gsap } from "gsap";

import useAnimationStore from "../Store/AnimationState";
const colorArray = [
  {
    name: "Pastel Blue",
    hex: "#9fb6d0",
    imageUrl: "/assets/color_1.png",
  },
  {
    name: "Jade Black",
    hex: "#191a1c",
    imageUrl: "/assets/color_2.png",
  },
  {
    name: "Moonstone Silver",
    hex: "#e7e9ed",
    imageUrl: "/assets/color_3.png",
  },
];

export function ModelBlue(props) {
  const { nodes, materials } = useGLTF("/Models/mi19A_Blue-transformed.glb");

  const activeState = useAnimationStore((state) => state.activeState);

  const [color, setColor] = useState("#e7e9ed");
  const groupRef = useRef();

  useEffect(() => {
    props.setModelLoaded(true);
    // Animation timeline using gsap
    const timeline = gsap.timeline();

    // Initial spinning animation with movement
    timeline.to(groupRef.current.position, {
      x: window.innerWidth < 440 ? -0.4 : 0,
      z: -10.5,
      duration: 2,
      ease: "power1.inOut",
      onUpdate: () => {
        groupRef.current.rotation.y += 0.1;
      },
    });

    timeline.to({}, { duration: 1 });
  }, []);

  useEffect(() => {
    if (activeState === 3) {
      gsap.to(groupRef.current.position, {
        x: -0.86,
        y: 0.27,
        z: -8,
        duration: 1,
        onStart: () => {
          gsap.to(groupRef.current.rotation, {
            x: -0.84,
            y: 0.6,
            z: 0.62,
            duration: 1,
          });
        },
      });
    } else if (activeState === 2) {
      gsap.to(groupRef.current.position, {
        x: 0.8,
        y: -0.5,
        z: -8,
        duration: 1,
        onStart: () => {
          gsap.to(groupRef.current.rotation, {
            x: window.innerWidth < 440 ? -0.4 : 0,
            y: -0.64,
            z: 0,
            duration: 1,
          });
        },
      });
    } else if (activeState === 1) {
      gsap.to(groupRef.current.rotation, {
        y: Math.PI,
        x: 0,
        z: 0,

        duration: 1,
      });
    } else if (activeState === 0) {
      gsap.to(groupRef.current.position, {
        x: window.innerWidth < 440 ? -0.4 : 0,
        y: 0.2,
        z: -10.5,
        duration: 1,
        onStart: () => {
          gsap.to(groupRef.current.rotation, {
            x: window.innerWidth < 440  ? -0.4 : 0,
            y: 0,
            z: 0,
            duration: 1,
          });
        },
      });
    }
  }, [activeState]);

  useFrame(() => {
    if (activeState === 0) groupRef.current.rotation.y += 0.005;
  });

  return (
    <group>
      {activeState === 1 && (
        <Html position={[window.innerWidth < 440 ? -0.3 : 0, 0, -9]}>
          <div className='color-container'>
            <span
              className='color-header'
              style={{
                top: window.innerWidth < 440 ? "77%" : "80%",
              }}
            >
              {colorArray.filter((item) => item.hex === color)[0].name}
            </span>

            <img
              src='/assets/color_1.png'
              onClick={() => setColor("#9fb6d0")}
              className={`color-div ${
                color === "#9fb6d0" && "color-div-selected"
              } `}
            />
            <img
              src='/assets/color_2.png'
              onClick={() => setColor("#191a1c")}
              className={`color-div ${
                color === "#191a1c" && "color-div-selected"
              } `}
            />
            <img
              src='/assets/color_3.png'
              onClick={() => setColor("#e7e9ed")}
              className={`color-div ${
                color === "#e7e9ed" && "color-div-selected"
              } `}
            />
          </div>
        </Html>
      )}
      <group
        ref={groupRef}
        scale={24}
        rotation={[0, 0, 0]}
        {...props}
        dispose={null}
      >
        {/* <PresentationControls enabled={activeState !== 3}> */}
          <mesh
            geometry={nodes["1-11-05815F_8002"].geometry}
            material={materials.WHITESMOKE}
          />
          <mesh
            geometry={nodes["2-11-145F_8002"].geometry}
            material={materials.YELLOW}
          />
          <mesh
            geometry={nodes.Circle002.geometry}
            material={materials.Flash}
          />
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes["GLASS-X19-BATT-COVER002_1"].geometry}
              material={materials["Glass.002"]}
              material-color={activeState === 1 ? color : "#e7e9ed"}
            />
            <mesh
              geometry={nodes["GLASS-X19-BATT-COVER002_2"].geometry}
              material={materials["Glass.002"]}
              material-color={activeState === 1 ? color : "#e7e9ed"}
            />
          </group>
          <mesh
            geometry={nodes["QT-X19-2M-CAM-LENS003"].geometry}
            material={materials["transp Glass"]}
          />
          <mesh
            geometry={nodes["QT-X19-BATT-COVER-PRINTING-INK002"].geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes["QT-X19-MAIN-CAM-LENS003"].geometry}
            material={materials["transp Glass"]}
          />
          <mesh
            geometry={nodes["QT-X19-MAIN-MIC-MESH002"].geometry}
            material={materials.GRAY34}
          />
          <mesh
            geometry={nodes["QT-X19-SPK-MESH002"].geometry}
            material={materials.mesh}
          />
          <mesh
            geometry={nodes["QT-X19-SUB-CAM-LENS003"].geometry}
            material={materials["transp Glass"]}
          />
          <mesh
            geometry={nodes["SJ-X19-BOT-COVER002"].geometry}
            material={materials.PHONE_COLOR_1}
            material-color={activeState === 1 ? color : "#e7e9ed"}
          />
          <mesh
            geometry={nodes["SJ-X19-DECO-RING-2009"].geometry}
            material={materials.Camera_Black}
          />
          <mesh
            geometry={nodes.SOLID039.geometry}
            material={materials.Black_Gummi}
          />
          <mesh
            geometry={nodes.redmi.geometry}
            material={materials.labels}
            position={[0.022, -0.059, -0.0035]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={0.163}
          />
          <mesh
            geometry={nodes.Circle.geometry}
            material={materials.labels}
            position={[0.007, 0.045, -0.003]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.002}
          />
          <mesh
            geometry={nodes["02_GLASS_X19_TP002_1"].geometry}
            material={materials.Screen_Black}
          />
          <mesh
            geometry={nodes["02_GLASS_X19_TP002_2"].geometry}
            material={materials.Screen_1}
          />
          <mesh
            geometry={nodes["02_GLASS_X19_TP002_3"].geometry}
            material={materials["Glass.001"]}
          />
          <mesh
            geometry={nodes.Lens_1006_1.geometry}
            material={materials.Lens}
          />
          <mesh
            geometry={nodes.Lens_1006_2.geometry}
            material={materials.Camera_Black_Metallic}
          />
          <mesh
            geometry={nodes.Lens_1008_1.geometry}
            material={materials.Lens}
          />
          <mesh
            geometry={nodes.Lens_1008_2.geometry}
            material={materials.Camera_Black_Metallic}
          />
          <mesh
            geometry={nodes.Lens_1009_1.geometry}
            material={materials.Lens}
          />
          <mesh
            geometry={nodes.Lens_1009_2.geometry}
            material={materials.Camera_Black_Metallic}
          />
          <mesh
            geometry={nodes.Lens_1010_1.geometry}
            material={materials.Lens}
          />
          <mesh
            geometry={nodes.Lens_1010_2.geometry}
            material={materials.Camera_Black_Metallic}
          />
          <mesh
            geometry={nodes["SJ-X19-DECO-RING-2007_1"].geometry}
            material={materials.Black_Glossy}
          />
          <mesh
            geometry={nodes["SJ-X19-DECO-RING-2007_2"].geometry}
            material={materials.Camera_Black}
          />
          <mesh
            geometry={nodes["SJ-X19-DECO-RING-2007_3"].geometry}
            material={materials.Camera_Black_Glossy}
          />
          <mesh
            geometry={nodes["SJ-X19-DECO-RING-2008_1"].geometry}
            material={materials.Black_Glossy}
          />
          <mesh
            geometry={nodes["SJ-X19-DECO-RING-2008_2"].geometry}
            material={materials.Camera_Black}
          />
          <mesh
            geometry={nodes["SJ-X19-DECO-RING-2008_3"].geometry}
            material={materials.Camera_Black_Glossy}
          />
          <mesh
            geometry={nodes["SJ-X19-DECO-RING-3002_1"].geometry}
            material={materials.Black_Glossy}
          />
          <mesh
            geometry={nodes["SJ-X19-DECO-RING-3002_2"].geometry}
            material={materials.Camera_Black}
          />
          <mesh
            geometry={nodes["SJ-X19-DECO-RING-3002_3"].geometry}
            material={materials.Camera_Black_Glossy}
          />
          <mesh
            geometry={nodes["SJ-X19A-CAM-DECO-50M002_1"].geometry}
            material={materials.Chrome}
          />
          <mesh
            geometry={nodes["SJ-X19A-CAM-DECO-50M002_2"].geometry}
            material={materials.Camera_Black_Glossy}
          />
          <mesh
            geometry={nodes.TYPE_C_GEEK_615_304_010002_1.geometry}
            material={materials.bc}
          />
          <mesh
            geometry={nodes.TYPE_C_GEEK_615_304_010002_2.geometry}
            material={materials.GRAY25}
          />
          <mesh
            geometry={nodes.TYPE_C_GEEK_615_304_010002_3.geometry}
            material={materials.IVORY}
          />
        {/* </PresentationControls> */}
      </group>
    </group>
  );
}

useGLTF.preload("/Models/mi19A_Blue-transformed.glb");
