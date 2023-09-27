import {toast, ToastContainer} from "react-toastify";
import React, { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import './toastNotification.css'

interface ToastNotificationProps {
  message: string;
  highlightedMessage: string;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({ message, highlightedMessage }) => {

  const toastStyles = {
    notificationStyle: {
      backgroundColor: '#271811',
      height: '90px',
      width: '320px',
      borderRadius: '15px',
      paddingBottom: '10px',
      fontSize: "18px",
      userSelect: 'none',
      letterSpacing: '1px'
    },
    gradient: {
      background: 'linear-gradient(to right, #AF7D0C 0%, #F3EBAC 80%, #AF7D0C 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      fontWeight: 600,
    },
    progressBar: {
      content: "''",
      display: 'flex',
      width: '81%',
      height: '6px',
      background: 'linear-gradient(to right, #AF7D0C 0%, #F3EBAC 80%, #AF7D0C 100%)',
      position: 'absolute',
      left: '25px',
      bottom: '20px',
      zIndex: '1',
      borderRadius: '10px'
    },
  };

  const showNotification = () => toast(
    <div className="flex text-white p-2 -translate-y-2.5">
      <div className="icon-wrapper">
        <span className="material-symbols-outlined gradient">verified</span>
      </div>
      <div className="flex space-x-1.5">
        <p className="font-light">{message}, </p>
        <p className="gradient font-semibold">{highlightedMessage}!</p>
      </div>
    </div>, {
      style: toastStyles.notificationStyle,
      progressStyle: toastStyles.progressBar
    }
  );

  useEffect(() => {
    showNotification();
  }, []);

  return (
    <ToastContainer

    />
  );
}

export default ToastNotification;
