import React, { Suspense } from "react";

import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

import Earth from "./Canvas/Earth";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
};

export default Home;
