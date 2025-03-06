export default function Modal({ title, text, date, onClose, button }) {
    return (
        <>
            <div className="model__background">
                <div className="modal-overlay">
                    <button className="modal-close" onClick={onClose}>X</button>
                    <div className="modal-content">
                        <div className="modal-content-top">
                            <h2 className="modal-header">{title}</h2>
                            <datetime className="modal-date" datetime="">{date}</datetime>
                        </div>
                        <figure className="modal-content-img">
                            <img className="modal-img" src="https://placehold.co/400x200" alt="" />
                        </figure>
                        <div className="modal-content-bottom">
                            <p className="modal-p">{"lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsumlorem ipsum. Lorem ipsum lorem ipsumlorem ipsum. Lorem ipsum lorem ipsumlorem ipsum. Lorem ipsum lorem ipsumlorem ipsum. Lorem ipsum lorem ipsumlorem ipsum. Lorem ipsum lorem ipsumlorem ipsum. Lorem ipsum lorem ipsumlorem ipsum. Lorem ipsum lorem ipsumlorem ipsum. Lorem ipsum lorem ipsum"}</p>
                            {button && (
                                <button className="modal-btn">Bekijk het verhaal</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}