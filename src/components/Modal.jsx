import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.object.isRequired,
    onClose: PropTypes.func,
  }

export default function Modal({ children, onClose }) {

    function handleBackdropClick(e) {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }

    return (
        <>
            <div className="backdrop" onClick={handleBackdropClick}>
                <dialog open className="modal">
                    {children}
                </dialog>
            </div>
        </>
    )
}

Modal.propTypes = propTypes;