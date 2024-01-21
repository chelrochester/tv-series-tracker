import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.object.isRequired,
    onClose: PropTypes.func,
  }

export default function Modal({ children, onClose }) {
    return (
        <>
            <div className="backdrop" onClick={onClose}>
                <dialog open className="modal">
                    {children}
                </dialog>
            </div>
        </>
    )
}

Modal.propTypes = propTypes;