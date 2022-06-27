import { createTheme, ThemeProvider } from '@suid/material';
import AppBar from '@suid/material/AppBar';
import Box from '@suid/material/Box';
import Grid from '@suid/material/Grid';
import SearchIcon from "@suid/icons-material/Search";
import FilterIcon from "@suid/icons-material/FilterAlt";
import ArrowLeftIcon from "@suid/icons-material/ArrowLeft";
import ArrowRightIcon from "@suid/icons-material/ArrowRight";
import TextField from '@suid/material/TextField';
import { Component, createSignal, onCleanup, Show } from 'solid-js';
import { AmbientLight, BoxGeometry, DirectionalLight, Mesh, MeshPhongMaterial, Scene, Vector3 } from 'three';

import AreaOfInterest, { AreaOfInterestData } from './AreaOfInterest';
import AreaOfInterestList from './AreaOfInterestList';
import composeScene from './ROSSceneComposer';
import Viewport3D from './Viewport3D';
import IconButton from '@suid/material/IconButton';
import Button from '@suid/material/Button';
import { RosbridgeConnection } from './Rosbridge';
import Modal from '@suid/material/Modal';
import ConnectionDialog from './ConnectionDialog';
import ImageList from './ImageList';
import ROSImage from './ROSImage';

const App: Component = () => {
  const [scene, setScene] = createSignal(new Scene());
  const [connection, setConnection] = createSignal<RosbridgeConnection|null>(null);

  onCleanup(() => connection()?.socket.close() );

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
  // const [selectedIndex, selectIndex] = createSignal<number|null>(null);
  const [selectedImage, selectImage] = createSignal<string|null>(null);

  return (
    <ThemeProvider theme={theme}>
      <ConnectionDialog
        connection={connection()}
        setConnection={connection => {
          setConnection(connection);
          composeScene(scene(), connection);
        }}
      />
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <AppBar position="static">
          Dashboard
          <Button
            onClick={() => {
              connection()?.socket.close();
              setConnection(null);
            }}
          >
            Disconnect
          </Button>
        </AppBar>
        <Grid container sx={{ flexGrow: 1, overflow: "auto" }}>
          <Grid item md={12}>
          </Grid>
          <Grid item md={9} sx={{ height: "100%", padding: "0.5em", display: "flex", flexDirection: "column" }}>
            <Viewport3D scene={scene()} style={{ flexGrow: "1", height: "100%" }} />
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
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;
