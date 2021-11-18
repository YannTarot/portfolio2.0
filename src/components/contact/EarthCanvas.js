import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import styled from 'styled-components';
import Earth from './Earth';

const CanvasContainer = styled.div`
  width: 80%;
  height: 50%;
  margin-top: 150px;
  position: absolute;
  @media (max-width: 840px) {
    width: 100%;
  }
`;

const EarthCanvas = () => {
  return (
  <CanvasContainer className="stars">
    <Canvas>
      <Suspense fallback={null}>
        <Earth/>
      </Suspense>
    </Canvas>
  </CanvasContainer>
  )
};

export default EarthCanvas;
