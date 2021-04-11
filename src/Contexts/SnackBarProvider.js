import React from "react";
import { useState, useEffect, createContext } from "react";

import SnackBar from "@material-ui/core/Snackbar";

export const SnackBarContext = createContext();

const AUTO_DISMISS = 5000;

export function SnackBarProvider({ children }) {
  const [alerts, setAlerts] = useState([]);

  const activeAlertIds = alerts.join(",");
  useEffect(() => {
    console.log("asdasd");
    if (activeAlertIds.length > 0) {
      const timer = setTimeout(
        () => setAlerts((alerts) => alerts.slice(0, alerts.length - 1)),
        AUTO_DISMISS
      );
      return () => clearTimeout(timer);
    }
  }, [activeAlertIds]);

  const addAlert = (alert) =>
    setAlerts((alerts) => {
      console.log(alert);
      return [alert, ...alerts];
    });

  const value = { addAlert };

  return (
    <SnackBarContext.Provider value={value}>
      {children}
      {alerts.map((alert) => {
        console.log("RENDER", alert);
        return <SnackBar key={alert}>{alert}</SnackBar>;
      })}
    </SnackBarContext.Provider>
  );
}
