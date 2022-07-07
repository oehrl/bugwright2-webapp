export type RobotType = "Crawler";

export default interface Robot {
  connection: string;
  prefix?: string;
  robotType: RobotType;
  poseTopic: string;
}
