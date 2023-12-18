import { type FC, type PropsWithChildren } from "react";
import styles from "./Box.module.css";

export type Props = PropsWithChildren<{}>;

export const Box: FC<Props> = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};
