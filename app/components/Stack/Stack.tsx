import { type FC, type PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./Stack.module.css";

export type Props = PropsWithChildren<{
  isRecursive?: boolean;
}>;

export const Stack: FC<Props> = ({ children, isRecursive = false }) => {
  const stackClassName = clsx(styles.stack, {
    [styles["stack-recursive"]]: isRecursive,
    [styles["stack-non-recursive"]]: !isRecursive,
  });
  return <div className={stackClassName}>{children}</div>;
};
