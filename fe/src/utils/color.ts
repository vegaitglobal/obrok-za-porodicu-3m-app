import { Colors } from "../constants/Colors";

interface IStatusColor {
  [key: number]: string;
}

const StatusColors: IStatusColor = {
  0: Colors.ORANGE,
  1: Colors.GREEN,
  2: Colors.PURPLE,
  3: Colors.BROWN,
  4: Colors.LIGHT_PINK,
};
export const getRandomColor = (index: number = 0) =>
  StatusColors[index % Object.keys(StatusColors).length];
