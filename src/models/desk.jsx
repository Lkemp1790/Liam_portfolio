import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame, extend } from "@react-three/fiber";
import { a } from "@react-spring/three";
import deskScene from "../assets/desk.glb";

const Desk = (props) => {
  const deskRef = useRef();
  const { nodes, materials } = useGLTF(deskScene);
  return (
    <a.group ref={deskRef} {...props}>
      <mesh
        geometry={nodes.Boxes_Boxes_0.geometry}
        material={materials.Boxes}
      />
      <mesh
        geometry={nodes.Boxes_B_Tranaparency_0.geometry}
        material={materials.B_Tranaparency}
      />
      <mesh
        geometry={nodes.PC_Monitor_PC_Monitor_0.geometry}
        material={materials.PC_Monitor}
      />
      <mesh
        geometry={nodes.PC_Monitor_PC_Screen_0.geometry}
        material={materials.PC_Screen}
      />
        <mesh
          geometry={nodes.PC_Keyboard_PC_Keyboard_0.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.PC_Keyboard_Keyboard_light_0.geometry}
          material={materials.Keyboard_light}
        />
        <mesh
          geometry={nodes.Cell_phone_Cell_phone_0.geometry}
          material={materials.Cell_phone}
        />
        <mesh
          geometry={nodes.Cell_phone_Cell_screen_0.geometry}
          material={materials.Cell_screen}
        />
      <mesh
        geometry={nodes.Desk_Desk_0.geometry}
        material={materials.Desk}
        
      />
      <mesh
        geometry={nodes.Paper_Paper_0.geometry}
        material={materials.Paper}
        
      />
      <mesh
        geometry={nodes.PC_Speaker_PC_Speakers_0.geometry}
        material={materials.PC_Speakers}
        
       
      />
      <mesh
        geometry={nodes.Keyboard_wire_WIre_0.geometry}
        material={materials.WIre}
        rotation={[-Math.PI / 2, 0, 0]}
        
      />
      <mesh
        geometry={nodes.PC_Mouse_PC_Mouse_0.geometry}
        material={materials.PC_Mouse}
        
      />
      <mesh
        geometry={nodes.Mouse_wire_WIre_0.geometry}
        material={materials.WIre}
        
      />
      <mesh
        geometry={nodes.Books_Books_0.geometry}
        material={materials.Books}
        
      />
      <mesh
        geometry={nodes.Notebook_Notebook_0.geometry}
        material={materials.Notebook}
        
      />
      <mesh
        geometry={nodes.Notebook_wire_WIre_0.geometry}
        material={materials.WIre}
       
      />
      <mesh
        geometry={nodes.Pen_Pen_0.geometry}
        material={materials.material_1}
        
      />
      <mesh
        geometry={nodes.Eraser_Eraser_0.geometry}
        material={materials.Eraser}
        
      />
      <mesh
        geometry={nodes.Dish_Cup_0.geometry}
        material={materials.material}
       
      />
      <mesh
        geometry={nodes.Mousepad_Mousepad_0.geometry}
        material={materials.Mousepad}
        
      />
    </a.group>
  );
};

export default Desk;
