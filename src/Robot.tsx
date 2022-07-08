import { createContext, createSignal, PropsWithChildren, useContext } from "solid-js";

export type RobotType = "Crawler";

export interface Robot {
  name?: string;
  connection?: string;
  prefix?: string;
  robotType?: RobotType;
  poseTopic?: string;
}

export interface RobotList {
  robots(): Robot[];
  add(robot: Robot): void;
  remove(index: number): void;
  update(index: number, robot: Robot): void;
}

const RobotListContext = createContext<RobotList>({
  add: () => console.error("Invalid context"),
  robots: () => [],
  remove: () => console.error("Invalid context"),
  update: () => console.error("Invalid context"),
});

export default function RobotListProvider(props: PropsWithChildren) {
  const [robots, setRobots] = createSignal<Robot[]>([]);

  return (
    <RobotListContext.Provider
      value={{
        robots: robots,
        add: robot => { setRobots([...robots(), robot]) },
        remove: index => setRobots(robots().filter((_, robotIndex) => index !== robotIndex)),
        update: (index, robot) => {
          const oldRobots = robots();
          oldRobots.splice(index, 1, robot);
          setRobots([...oldRobots]);
        }
      }}
    >
      {props.children}
    </RobotListContext.Provider>
  );
}

export function useRobotList() {
  return useContext(RobotListContext);
}

export function useRobots() {
  return useRobotList().robots() || [];
}

export function useRobot(index: number) {
  const robots = useRobots();
  return index < robots.length ? robots[index] : undefined;
}

export function updateRobot(index: number, robot: Robot) {
  return useRobotList().update(index, robot);
}
