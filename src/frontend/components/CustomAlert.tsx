// components/CustomAlert.tsx
import React from 'react';
import styled from 'styled-components';

const AlertOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlertBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

interface CustomAlertProps {
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, onClose }) => {
  return (
    <AlertOverlay onClick={onClose}>
      <AlertBox>
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </AlertBox>
    </AlertOverlay>
  );
};

export default CustomAlert;
