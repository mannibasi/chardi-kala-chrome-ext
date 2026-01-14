import { useLiveDate } from "../hooks/useLiveDate.ts";
import styles from "./Clock.module.css";

export const Clock = () => {
  const now = useLiveDate();

  const hour = (now.getHours() % 12 || 12).toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

  return (
    <div className={styles.clock}><p>{hour + ":" + minute + " " + ampm}</p></div>
  );
}
