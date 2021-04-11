import React from "react";
import { useState, useEffect, createContext } from "react";
import Alert from "@material-ui/lab/Alert";

export const SnackBarContext = createContext();

const AUTO_DISMISS = 5000;

export function SnackBarProvider({ children }) {
  const [alerts, setAlerts] = useState([]);
  const activeAlertIds = alerts.join(",");

  useEffect(() => {
    if (activeAlertIds.length > 0) {
      const timer = setTimeout(
        () => setAlerts((alerts) => alerts.slice(0, alerts.length - 1)),
        AUTO_DISMISS
      );
      return () => clearTimeout(timer);
    }
  }, [activeAlertIds]);

  const addAlert = (alert) => setAlerts((alerts) => [alert, ...alerts]);

  return (
    <SnackBarContext.Provider value={{ addAlert }}>
      {children}
      {alerts.map((alert) => {
        return <Alert key={alert}>{alert}</Alert>;
      })}
    </SnackBarContext.Provider>
  );
}
