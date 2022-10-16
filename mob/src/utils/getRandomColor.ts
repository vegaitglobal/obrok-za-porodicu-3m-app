import {Colors} from '../constants/Colors';

interface IStatusColor {
  [key: number]: string;
}

const StatusColors: IStatusColor = {
  0: Colors.LIGHT_PINK,
  1: Colors.ORANGE,
  2: Colors.GREEN,
  3: Colors.PURPLE,
  4: Colors.BROWN,
};
export const getRandomColor = (index: number = 1) =>
  StatusColors[index % Object.keys(StatusColors).length];
