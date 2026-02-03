import ReactDOM from "react-dom";

export default function Exercise3Toast({ message }) {
    return ReactDOM.createPortal(
        <aside className="toast" data-testid="toast">
            <p>{message}</p>
        </aside>, document.querySelector('body')
    );
}
