import { type FC, type PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./Cluster.module.css";

type ClusterPosition = "flex-start" | "flex-end" | "center";

export type Props = PropsWithChildren<{
  justify?: ClusterPosition;
  aline?: ClusterPosition;
}>;

export const Cluster: FC<Props> = ({
  children,
  justify = "flex-start",
  aline = "flex-start",
}) => {
  const clusterClassName = clsx(styles.cluster, {
    [styles["cluster-justify-start"]]: justify === "flex-start",
    [styles["cluster-justify-end"]]: justify === "flex-end",
    [styles["cluster-justify-center"]]: justify === "center",
    [styles["cluster-aline-start"]]: aline === "flex-start",
    [styles["cluster-aline-end"]]: aline === "flex-end",
    [styles["cluster-aline-center"]]: aline === "center",
  });
  return <ul className={clusterClassName}>{children}</ul>;
};
