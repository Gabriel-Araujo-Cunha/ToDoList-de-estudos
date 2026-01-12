import "./button.style.css";

export function Button({ props, children }) {
    return (
        <button {...props} className="btn-save-item">
            {children}
        </button>

    );
}