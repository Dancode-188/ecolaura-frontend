import React from "react";
import { useNotification } from "../../../context/NotificationContext";
import styles from "./Notification.module.css";

const Notification = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className={styles.notificationContainer}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`${styles.notification} ${styles[notification.type]}`}
        >
          <p>{notification.message}</p>
          <button
            onClick={() => removeNotification(notification.id)}
            className={styles.closeButton}
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notification;
