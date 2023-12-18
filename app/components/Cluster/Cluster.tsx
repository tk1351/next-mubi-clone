import { type FC, type PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./Cluster.module.css";

type ClusterPosition = "flex-start" | "flex-end" | "center";

export type Props = PropsWithChildren<{
  justify?: ClusterPosition;
  align?: ClusterPosition;
}>;

export const Cluster: FC<Props> = ({
  children,
  justify = "flex-start",
  align = "flex-start",
}) => {
  const clusterClassName = clsx(styles.cluster, {
    [styles["cluster-justify-start"]]: justify === "flex-start",
    [styles["cluster-justify-end"]]: justify === "flex-end",
    [styles["cluster-justify-center"]]: justify === "center",
    [styles["cluster-align-start"]]: align === "flex-start",
    [styles["cluster-align-end"]]: align === "flex-end",
    [styles["cluster-align-center"]]: align === "center",
  });
  return <ul className={clusterClassName}>{children}</ul>;
};
