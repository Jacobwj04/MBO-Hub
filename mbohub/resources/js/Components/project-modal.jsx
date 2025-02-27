export function Modal({ title, text, date, onClose }) {
    return (
        <div className="modal-overlay">
            <button className="modal-close" onClick={onClose}>X</button>
            <div className="modal-content">
                <div className="modal-content-top">
                    <h2 className="modal-header">header</h2>
                    <time datetime="">{date}</time>
                </div>
                <figure className="modal-content-img">
                    <img className="modal-img" src="https://placehold.co/400x200" alt="" />
                </figure>
                <div className="modal-content-bottom">
                    <p className="modal-p">lorem ipsum. Lorem ipsum</p>
                    <button className="modal-btn">Bekijk het verhaal</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;