import { createContext, createSignal, PropsWithChildren } from "solid-js";

export type RobotType = "Crawler";

export interface Robot {
  connection: string;
  prefix?: string;
  robotType: RobotType;
  poseTopic: string;
}

export interface RobotList {
  robots: Robot[];
  add(robot: Robot): void;
  remove(index: number): void;
}

const RobotListContext = createContext<RobotList>();

export default function RobotListProvider(props: PropsWithChildren) {
  const [robots, setRobots] = createSignal<Robot[]>([]);

  return (
    <RobotListContext.Provider
      value={{
        robots: robots(),
        add: robot => setRobots([...robots(), robot]),
        remove: index => setRobots(robots().filter((_, robotIndex) => index !== robotIndex)),
      }}
    >
      {props.children}
    </RobotListContext.Provider>
  );
}
