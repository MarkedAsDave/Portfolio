import React from "react";
import "./modal.css";

export default function Invitation({ onClose, isDarkMode }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>Invitations</h3>
                    <button className={`close-btn ${isDarkMode? "dark-mode" : "light-mode"}`} onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    {/* Add your invitation content here */}
                </div>
            </div>
        </div>
    );
}
