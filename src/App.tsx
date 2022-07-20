import { createTheme, ThemeProvider } from '@suid/material';
import Box from '@suid/material/Box';
import Grid from '@suid/material/Grid';
import SearchIcon from "@suid/icons-material/Search";
import FilterIcon from "@suid/icons-material/FilterAlt";
import TextField from '@suid/material/TextField';
import { Component } from 'solid-js';

import MenuBar from './MenuBar';
import ROSBridgeConnectionsProvider from './Connections';
import RobotListProvider from './Robot';
import RobotOverview from './RobotOverview';
import Viewport from './Three.js/Viewport';
import { DirectionalLight, Mesh, MeshPhongMaterial, PlaneGeometry, Scene } from 'three';
import { AmbientLight } from './Three.js/AmbientLight';
import { Skybox } from './Three.js/Skybox';
import { Water } from './Three.js/Water';
import RobotMeshes from './BugWright2/RobotMeshes';
import ConfigProvider from './Config';
import { Ship } from './BugWright2/Ship';
import waternormalsURL from './assets/waternormals.jpg';
import skyboxDown from './assets/skyboxes/clouds/down.jpeg';
import skyboxUp from './assets/skyboxes/clouds/up.jpeg';
import skyboxEast from './assets/skyboxes/clouds/east.jpeg';
import skyboxWest from './assets/skyboxes/clouds/west.jpeg';
import skyboxNorth from './assets/skyboxes/clouds/north.jpeg';
import skyboxSouth from './assets/skyboxes/clouds/south.jpeg';

const App: Component = () => {
  const scene = new Scene();

  const light = new DirectionalLight(0xffffff, 0.8);
  light.position.set(0.1, 1, 2.0);
  scene.add(light);

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider>
        <ROSBridgeConnectionsProvider>
          <RobotListProvider>
            <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <MenuBar />
              <Grid container sx={{ flexGrow: 1, overflow: "auto" }}>
                <Grid item md={3} sx={{ height: "100%", padding: "0.5em", display: "flex", flexDirection: "column" }}>
                  <RobotOverview />
                </Grid>
                <Grid item md={9} sx={{ height: "100%", padding: "0.5em", display: "flex", flexDirection: "column" }}>
                  <Ship scene={scene} />
                  <Skybox
                    scene={scene}
                    east={skyboxEast}
                    west={skyboxWest}
                    up={skyboxUp}
                    down={skyboxDown}
                    north={skyboxNorth}
                    south={skyboxSouth}
                  />
                  <Water scene={scene} waterNormalsTexture={waternormalsURL} width={10000} height={10000} />
                  <AmbientLight scene={scene} intensity={0.3} />
                  <RobotMeshes scene={scene} />
                  <Viewport scene={scene} style={{ flexGrow: "1", height: "100%" }} />
                  {
                    // <Viewport3D scene={scene()} cameraType="orthographic" style={{ flexGrow: "1", height: "100%" }} />
                  }
                </Grid>
                {/*
                <Grid item md={3} sx={{ height: "100%", padding: "0.5em", display: "flex", flexDirection: "column" }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <SearchIcon />
                    <TextField
                      fullWidth
                      variant="standard"
                      placeholder="Filter AoIs"
                    />
                    <FilterIcon />
                  </Box>
                </Grid>
                */}
              </Grid>
            </Box>
          </RobotListProvider>
        </ROSBridgeConnectionsProvider>
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default App;
