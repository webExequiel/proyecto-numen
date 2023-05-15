import { useState } from "react";
import "../boton.css";

export const SendButton = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleClick = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 2500);
    }, 2000);
  };
  return (
    <button
      onClick={handleClick}
      className={isSending || isSent ? "sending" : ""}
    >
      <span className="material-symbols-outlined m-2">
        {isSent ? "check" : "send"}
      </span>
      <span className="text m-2">
        {isSending ? "Agregando ..." : isSent ? "Agregado" : "Agregar al Carrito"}
      </span>
    </button>
  );
};