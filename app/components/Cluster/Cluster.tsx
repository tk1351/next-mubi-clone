import { type FC, type PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./Cluster.module.css";

type ClusterPosition = "left" | "right" | "center";

export type Props = PropsWithChildren<{
  position?: ClusterPosition;
}>;

export const Cluster: FC<Props> = ({ children, position }) => {
  const clusterClassName = clsx(styles.cluster, {
    [styles["cluster-left"]]: position === "left",
    [styles["cluster-right"]]: position === "right",
    [styles["cluster-center"]]: position === "center",
  });
  return <ul className={clusterClassName}>{children}</ul>;
};
