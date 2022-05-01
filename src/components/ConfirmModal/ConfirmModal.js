import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ConfirmModal = ({ setModal, setConfirm }) => {

    const handleConfirmBtn = () => {
        setModal(false)
        setConfirm(true)
    }

    const handleCancelBtn = () => {
        setConfirm(false)
        setModal(false)
    }
    return (
        <div className={`fixed bg-black bg-opacity-50  inset-0 flex justify-center items-center z-50`}>

            {/* modal body */}
            <div className='text-black bg-white max-w-sm p-4 rounded-md'>
                <div className=' flex justify-between'>
                    <p>Confirm Delete?</p>
                    <p
                        onClick={handleCancelBtn}
                    ><FontAwesomeIcon icon={faX} /></p>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione fuga asperiores sunt aliquid minima recusandae iste commodi quae minus aspernatur.
                    </p>
                </div>
                <div className=' flex justify-end'>
                    <button
                        onClick={handleCancelBtn}
                    >Cancel</button>
                    <button
                        onClick={handleConfirmBtn}
                        className=' bg-red-600 px-2 py-1 text-white rounded-md ml-4'>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;