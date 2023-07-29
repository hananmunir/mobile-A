/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 mi19A_Blue.glb -T -M
*/

import React, { useRef, useEffect, useState } from "react";
import { Html, PresentationControls, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { gsap } from "gsap";
import * as THREE from "three";

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
  const { camera, gl, scene } = useThree();
  const activeState = useAnimationStore((state) => state.activeState);

  const [color, setColor] = useState("#e7e9ed");
  const groupRef = useRef();

  useEffect(() => {
    props.setModelLoaded(true);
    // Animation timeline using gsap
    const timeline = gsap.timeline();

    // Initial spinning animation with movement
    timeline.to(groupRef.current.position, {
      x: 0,
      z: 0.4,
      duration: -10,
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
        x: -0.9,
        y: 0.4,
        z: -8.6,
        duration: 1,
        onStart: () => {
          gsap.to(groupRef.current.rotation, {
            x: -0.5,
            y: 0.3,
            z: 0.4,
            duration: 1,
          });
        },
      });
    } else if (activeState === 2) {
      gsap.to(groupRef.current.position, {
        x: 1.2,
        y: 0.2,
        z: -8.6,
        duration: 1,
        onStart: () => {
          gsap.to(groupRef.current.rotation, {
            x: window.innerWidth < 440 ? -0.4 : 0,
            y: -3.8,
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
        x: 0,
        y: 0.4,
        z: -10,
        duration: 1,
        onStart: () => {
          gsap.to(groupRef.current.rotation, {
            x: window.innerWidth < 440 ? -0.4 : 0,
            y: 0,
            z: 0,
            duration: 1,
          });
        },
      });
    }
  }, [activeState]);

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
      {groupRef.current && (activeState === 0 || activeState === 1) && (
        <CustomOrbitControl object={groupRef} />
      )}

      <group ref={groupRef} scale={24} {...props} dispose={null}>
        <mesh
          geometry={nodes["1-11-05815F_8002"].geometry}
          material={materials.WHITESMOKE}
        />
        <mesh
          geometry={nodes["2-11-145F_8002"].geometry}
          material={materials.YELLOW}
        />
        <mesh geometry={nodes.Circle002.geometry} material={materials.Flash} />
        <mesh
          material-color={activeState === 1 ? color : "#e7e9ed"}
          geometry={nodes["GLASS-X19-BATT-COVER002"].geometry}
          material={materials["Glass.002"]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes["QT-X19-2M-CAM-LENS003"].geometry}
          material={materials["transp Glass"]}
        />
        <mesh
          geometry={nodes["QT-X19-BATT-COVER-PRINTING-INK002"].geometry}
          material={materials.Material}
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
          geometry={nodes["SJ-X19-BOT-COVER002"].geometry}
          material={materials.PHONE_COLOR_1}
          material-color={activeState === 1 ? color : "#e7e9ed"}
        />
        <mesh
          geometry={nodes["SJ-X19A-CAM-DECO-50M002"].geometry}
          material={materials.Chrome}
        />
        <mesh
          geometry={nodes.SOLID039.geometry}
          material={materials.Black_Gummi}
        />
        <mesh
          geometry={nodes.redmi.geometry}
          position={[0.022, -0.059, -0.0045]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.163}
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
        <mesh geometry={nodes.Lens_1006_1.geometry} material={materials.Lens} />
        <mesh
          geometry={nodes.Lens_1006_2.geometry}
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
      </group>
    </group>
  );
}

useGLTF.preload("/Models/mi19A_Blue-transformed.glb");

const CustomOrbitControl = ({ object }) => {
  const { gl, camera } = useThree();
  let isDragging = false;
  const previousMouse = useRef([0, 0]);
  const activeState = useAnimationStore((state) => state.activeState);

  const onMouseDown = (event) => {
    isDragging = true;
    previousMouse.current =
      event.type === "touchstart"
        ? [event.touches[0].clientX, event.touches[0].clientY]
        : [event.clientX, event.clientY];
  };

  const onMouseUp = () => {
    isDragging = false;
  };

  const onMouseMove = (event) => {
    if (!isDragging) return;
    const clientX =
      event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
    const clientY =
      event.type === "touchmove" ? event.touches[0].clientY : event.clientY;
    const deltaMove = [
      clientX - previousMouse.current[0],
      clientY - previousMouse.current[1],
    ];

    const deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        toRadians(deltaMove[1]),
        toRadians(deltaMove[0]),
        0,
        "XYZ"
      )
    );

    object.current.quaternion.multiplyQuaternions(
      deltaRotationQuaternion,
      object.current.quaternion
    );

    previousMouse.current = [clientX, clientY];
  };

  const toRadians = (angle) => {
    return angle * (Math.PI / 180);
  };
  useFrame(() => {
    if (!isDragging && activeState !== 1) object.current.rotateY(0.005);
  });

  useEffect(() => {
    gl.domElement.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    gl.domElement.addEventListener("mousemove", onMouseMove);

    window.addEventListener("touchstart", onMouseDown);
    window.addEventListener("touchend", onMouseUp);
    window.addEventListener("touchmove", onMouseMove);
  }, []);

  return null;
};
