import "./modal.css";

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="modal-content">{children}</div>
      </div>
      <div className="backdrop" />
    </>
  );
}
