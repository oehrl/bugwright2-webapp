import { createContext, ParentProps, useContext } from "solid-js";
import { createStore, SetStoreFunction, Store } from "solid-js/store";
import { Connection } from "./Connections";
import { Robot } from "./Robot";

export interface ShipMesh {
  topic?: string;
  connection?: string;
}

export interface Ship {
  mesh?: ShipMesh;
}

export interface Config {
  connections: {[key: string]: Connection};
  robots: Robot[];
  ship: Ship;
}

export const defaultConfig: Config = {
  connections: {},
  robots: [],
  ship: {
    mesh: {
      connection: "Asdadsasd",
      topic: "asd",
    }
  },
};

export type ConfigContextValue = [
  config: Store<Config>,
  setConfig: SetStoreFunction<Config>
];

export const ConfigContext = createContext<ConfigContextValue>([defaultConfig, () => {}]);

export default function ConfigProvider(props: ParentProps) {
  const [config, setConfig] = createStore<Config>(defaultConfig);

  return <ConfigContext.Provider value={[config, setConfig]}>{ props.children }</ConfigContext.Provider>;
}

export function useConfigContext() {
  return useContext(ConfigContext);
}

export function useConfig() {
  const [config, _] = useConfigContext();
  return config;
}

export function useShip() {
  const [config, setConfig] = useConfigContext();
  return [
    config.ship,
    (ship: Ship) => {
      setConfig("ship", ship);
    }
  ];
}

export function useShipMesh(): [ShipMesh|undefined, (shipMesh: ShipMesh) => void] {
  const [config, setConfig] = useConfigContext();
  return [
    config.ship.mesh,
    (shipMesh: ShipMesh) => {
      setConfig("ship", "mesh", shipMesh);
    }
  ];
}
