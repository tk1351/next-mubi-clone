import { type FC, type PropsWithChildren } from "react";
import styles from "./Grid.module.css";

export type Props = PropsWithChildren<{}>;

export const Grid: FC<Props> = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};
