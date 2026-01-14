import { useLiveDate } from "../hooks/useLiveDate.ts";
import styles from "./Clock.module.css";
import { getFormattedTime } from "../utils/timeUtils.ts";

export const Clock = () => {
  return (
    <div className={styles.clock}><p>{getFormattedTime(useLiveDate())}</p></div>
  );
}
