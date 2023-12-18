import { type FC, type PropsWithChildren } from "react";
import styles from "./Frame.module.css";

export type Props = PropsWithChildren<{}>;

export const Frame: FC<Props> = ({ children }) => {
  return <div className={styles.frame}>{children}</div>;
};
