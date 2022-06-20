import { createTheme, ThemeProvider } from '@suid/material';
import AppBar from '@suid/material/AppBar';
import Box from '@suid/material/Box';
import Grid from '@suid/material/Grid';
import SearchIcon from "@suid/icons-material/Search";
import FilterIcon from "@suid/icons-material/FilterAlt";
import ArrowLeftIcon from "@suid/icons-material/ArrowLeft";
import ArrowRightIcon from "@suid/icons-material/ArrowRight";
import TextField from '@suid/material/TextField';
import { Component, createSignal, Show } from 'solid-js';
import { AmbientLight, BoxGeometry, DirectionalLight, Mesh, MeshPhongMaterial, Scene, Vector3 } from 'three';

import AreaOfInterest, { AreaOfInterestData } from './AreaOfInterest';
import AreaOfInterestList from './AreaOfInterestList';
import composeScene from './ROSSceneComposer';
import Viewport3D from './Viewport3D';
import IconButton from '@suid/material/IconButton';

const App: Component = () => {
  const [scene, setScene] = createSignal(new Scene());

  composeScene(scene());

  const cubeGeometry = new BoxGeometry(1, 1, 1);
  cubeGeometry.computeVertexNormals();
  const cubeMaterial = new MeshPhongMaterial({ color: 0x00ff00 });

  const cube = new Mesh(cubeGeometry, cubeMaterial);
  cube.translateOnAxis(new Vector3(1, 0, 1), 5);
  scene().add(cube);

  const cube2 = new Mesh(cubeGeometry, cubeMaterial);
  cube2.translateOnAxis(new Vector3(1, 0, -1), 5);
  scene().add(cube2);

  const cube3 = new Mesh(cubeGeometry, cubeMaterial);
  cube3.translateOnAxis(new Vector3(-1, 0, 1), 5);
  scene().add(cube3);

  const cube4 = new Mesh(cubeGeometry, cubeMaterial);
  cube4.translateOnAxis(new Vector3(-1, 0, -1), 5);
  scene().add(cube4);

  const light = new DirectionalLight(0xffffff, 0.8);
  light.position.set(0.1, 1, 2.0);
  scene().add(light);

  const ambientLight = new AmbientLight(0xffffff, 0.3);
  scene().add(ambientLight);

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const areaOfInterests: AreaOfInterestData[] = [
    {
      id: 123123,
      severity: 1,
      nextInspection: 100,
      notes: "Seems Rusy here",
      audioNotes: [null, null],
    },
    {
      id: 182341,
      severity: 5,
      nextInspection: 12,
      notes: "Seems Rusy here",
      audioNotes: [null, null, null],
    },
    {
      id: 10191,
      severity: 4,
      nextInspection: 11,
      notes: "Seems Rusy here",
      audioNotes: [null],
    },
    {
      id: 60191,
      severity: 9,
      nextInspection: 1,
      notes: "Seems Rusy here",
      audioNotes: [null, null, null, null],
    },
    {
      id: 896131,
      severity: 1,
      nextInspection: 1,
      notes: "Seems Rusy here",
      audioNotes: [null, null, null],
    },
  ];
  const [selectedIndex, selectIndex] = createSignal<number|null>(null);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <AppBar position="static">
          Dashboard
        </AppBar>
        <Grid container sx={{ flexGrow: 1, overflow: "auto" }}>
          <Grid item md={9} sx={{ height: "100%", padding: "0.5em", display: "flex", flexDirection: "column" }}>
            <Viewport3D scene={scene()} style={{ flexGrow: "1", height: "100%" }} />
            <Viewport3D scene={scene()} cameraType="orthographic" style={{ flexGrow: "1", height: "100%" }} />
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
            <AreaOfInterestList
              style={{ flexGrow: "1", height: "100%", overflow: "auto" }}
              data={areaOfInterests}
              selectedIndex={selectedIndex()}
              onSelectionChanged={selectIndex}
            />
            <Show when={selectedIndex() !== null}>
              <Box sx={{ display: 'flex', alignItems: 'center', width: "100%" }}>
                <IconButton onClick={() => selectIndex(selectedIndex() === 0 ? areaOfInterests.length - 1 : selectedIndex () as number - 1)}>
                  <ArrowLeftIcon />
                </IconButton>
                <AreaOfInterest
                  data={areaOfInterests}
                  selectedIndex={selectedIndex() as number}
                  onSelectionChanged={selectIndex}
                  style={{ flexGrow: 1 }}
                />
                <IconButton onClick={() => selectIndex((selectedIndex() as number + 1) % areaOfInterests.length)}>
                  <ArrowRightIcon />
                </IconButton>
              </Box>
            </Show>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;
