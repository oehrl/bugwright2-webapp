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
      <ROSBridgeConnectionsProvider>
        <RobotListProvider>
          <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <MenuBar />
            <Grid container sx={{ flexGrow: 1, overflow: "auto" }}>
              <Grid item md={3} sx={{ height: "100%", padding: "0.5em", display: "flex", flexDirection: "column" }}>
                <RobotOverview />
              </Grid>
              <Grid item md={6} sx={{ height: "100%", padding: "0.5em", display: "flex", flexDirection: "column" }}>
                <Skybox scene={scene} baseURL="/src/assets/skyboxes/clouds" />
                <Water scene={scene} waterNormalsTexture="/src/assets/waternormals.jpg" width={10000} height={10000} />
                <AmbientLight scene={scene} intensity={0.3} />
                <Viewport scene={scene} style={{ flexGrow: "1", height: "100%" }} />
                {
                  // <Viewport3D scene={scene()} cameraType="orthographic" style={{ flexGrow: "1", height: "100%" }} />
                }
              </Grid>
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
                {/*
                <ImageList
                  style={{ flexGrow: "1", height: "100%", overflow: "auto" }}
                  connection={connection()}
                  onSelectionChanged={selectImage}
                />
                <Show when={selectedImage() !== null}>
                  <ROSImage
                    connection={connection()}
                    topic={selectedImage() as string}
                    width={200}
                    height={200}
                  />
                </Show>
                */}
              </Grid>
            </Grid>
          </Box>
        </RobotListProvider>
      </ROSBridgeConnectionsProvider>
    </ThemeProvider>
  );
};

export default App;
