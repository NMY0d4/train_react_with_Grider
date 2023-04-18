import { useState } from 'react';
import Button from '../components/ui/buttons/Button';
import Modal from '../components/ui/modal/Modal';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && <Modal />}
    </div>
  );
}

export default ModalPage;
