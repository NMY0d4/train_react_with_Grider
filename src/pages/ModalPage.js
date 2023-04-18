import { useState } from 'react';
import Button from '../components/ui/buttons/Button';
import Modal from '../components/ui/modal/Modal';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div className=''>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Donec nibh mi, mattis et massa quis, cursus fringilla lacus. Aliquam
        eget euismod tortor. Nulla fringilla gravida malesuada. Ut vitae rutrum
        orci. Vivamus tincidunt ac dolor at vestibulum. Praesent a enim leo.
        Donec nunc mi, tempor sit amet enim a, semper molestie mi. Mauris id
        nisi et dolor bibendum elementum. In quis posuere quam, a rutrum urna.
        Nullam a felis erat. Nunc et tempus massa. Nam sed consequat felis. Cras
        varius dictum risus. Nullam efficitur tellus at sem iaculis, nec
        vehicula tellus porta.
      </p>
      <p>
        Donec nibh mi, mattis et massa quis, cursus fringilla lacus. Aliquam
        eget euismod tortor. Nulla fringilla gravida malesuada. Ut vitae rutrum
        orci. Vivamus tincidunt ac dolor at vestibulum. Praesent a enim leo.
        Donec nunc mi, tempor sit amet enim a, semper molestie mi. Mauris id
        nisi et dolor bibendum elementum. In quis posuere quam, a rutrum urna.
        Nullam a felis erat. Nunc et tempus massa. Nam sed consequat felis. Cras
        varius dictum risus. Nullam efficitur tellus at sem iaculis, nec
        vehicula tellus porta.
      </p>
      <p>
        Donec nibh mi, mattis et massa quis, cursus fringilla lacus. Aliquam
        eget euismod tortor. Nulla fringilla gravida malesuada. Ut vitae rutrum
        orci. Vivamus tincidunt ac dolor at vestibulum. Praesent a enim leo.
        Donec nunc mi, tempor sit amet enim a, semper molestie mi. Mauris id
        nisi et dolor bibendum elementum. In quis posuere quam, a rutrum urna.
        Nullam a felis erat. Nunc et tempus massa. Nam sed consequat felis. Cras
        varius dictum risus. Nullam efficitur tellus at sem iaculis, nec
        vehicula tellus porta.
      </p>
      <p>
        Donec nibh mi, mattis et massa quis, cursus fringilla lacus. Aliquam
        eget euismod tortor. Nulla fringilla gravida malesuada. Ut vitae rutrum
        orci. Vivamus tincidunt ac dolor at vestibulum. Praesent a enim leo.
        Donec nunc mi, tempor sit amet enim a, semper molestie mi. Mauris id
        nisi et dolor bibendum elementum. In quis posuere quam, a rutrum urna.
        Nullam a felis erat. Nunc et tempus massa. Nam sed consequat felis. Cras
        varius dictum risus. Nullam efficitur tellus at sem iaculis, nec
        vehicula tellus porta.
      </p>
      <p>
        Donec nibh mi, mattis et massa quis, cursus fringilla lacus. Aliquam
        eget euismod tortor. Nulla fringilla gravida malesuada. Ut vitae rutrum
        orci. Vivamus tincidunt ac dolor at vestibulum. Praesent a enim leo.
        Donec nunc mi, tempor sit amet enim a, semper molestie mi. Mauris id
        nisi et dolor bibendum elementum. In quis posuere quam, a rutrum urna.
        Nullam a felis erat. Nunc et tempus massa. Nam sed consequat felis. Cras
        varius dictum risus. Nullam efficitur tellus at sem iaculis, nec
        vehicula tellus porta.
      </p>
      <p>
        Donec nibh mi, mattis et massa quis, cursus fringilla lacus. Aliquam
        eget euismod tortor. Nulla fringilla gravida malesuada. Ut vitae rutrum
        orci. Vivamus tincidunt ac dolor at vestibulum. Praesent a enim leo.
        Donec nunc mi, tempor sit amet enim a, semper molestie mi. Mauris id
        nisi et dolor bibendum elementum. In quis posuere quam, a rutrum urna.
        Nullam a felis erat. Nunc et tempus massa. Nam sed consequat felis. Cras
        varius dictum risus. Nullam efficitur tellus at sem iaculis, nec
        vehicula tellus porta.
      </p>
      <p>
        Donec nibh mi, mattis et massa quis, cursus fringilla lacus. Aliquam
        eget euismod tortor. Nulla fringilla gravida malesuada. Ut vitae rutrum
        orci. Vivamus tincidunt ac dolor at vestibulum. Praesent a enim leo.
        Donec nunc mi, tempor sit amet enim a, semper molestie mi. Mauris id
        nisi et dolor bibendum elementum. In quis posuere quam, a rutrum urna.
        Nullam a felis erat. Nunc et tempus massa. Nam sed consequat felis. Cras
        varius dictum risus. Nullam efficitur tellus at sem iaculis, nec
        vehicula tellus porta.
      </p>
      <p>
        Donec nibh mi, mattis et massa quis, cursus fringilla lacus. Aliquam
        eget euismod tortor. Nulla fringilla gravida malesuada. Ut vitae rutrum
        orci. Vivamus tincidunt ac dolor at vestibulum. Praesent a enim leo.
        Donec nunc mi, tempor sit amet enim a, semper molestie mi. Mauris id
        nisi et dolor bibendum elementum. In quis posuere quam, a rutrum urna.
        Nullam a felis erat. Nunc et tempus massa. Nam sed consequat felis. Cras
        varius dictum risus. Nullam efficitur tellus at sem iaculis, nec
        vehicula tellus porta.
      </p>
      <p>
        Donec nibh mi, mattis et massa quis, cursus fringilla lacus. Aliquam
        eget euismod tortor. Nulla fringilla gravida malesuada. Ut vitae rutrum
        orci. Vivamus tincidunt ac dolor at vestibulum. Praesent a enim leo.
        Donec nunc mi, tempor sit amet enim a, semper molestie mi. Mauris id
        nisi et dolor bibendum elementum. In quis posuere quam, a rutrum urna.
        Nullam a felis erat. Nunc et tempus massa. Nam sed consequat felis. Cras
        varius dictum risus. Nullam efficitur tellus at sem iaculis, nec
        vehicula tellus porta.
      </p>
      <p>
        Donec nibh mi, mattis et massa quis, cursus fringilla lacus. Aliquam
        eget euismod tortor. Nulla fringilla gravida malesuada. Ut vitae rutrum
        orci. Vivamus tincidunt ac dolor at vestibulum. Praesent a enim leo.
        Donec nunc mi, tempor sit amet enim a, semper molestie mi. Mauris id
        nisi et dolor bibendum elementum. In quis posuere quam, a rutrum urna.
        Nullam a felis erat. Nunc et tempus massa. Nam sed consequat felis. Cras
        varius dictum risus. Nullam efficitur tellus at sem iaculis, nec
        vehicula tellus porta.
      </p>
      <p>
        Donec nibh mi, mattis et massa quis, cursus fringilla lacus. Aliquam
        eget euismod tortor. Nulla fringilla gravida malesuada. Ut vitae rutrum
        orci. Vivamus tincidunt ac dolor at vestibulum. Praesent a enim leo.
        Donec nunc mi, tempor sit amet enim a, semper molestie mi. Mauris id
        nisi et dolor bibendum elementum. In quis posuere quam, a rutrum urna.
        Nullam a felis erat. Nunc et tempus massa. Nam sed consequat felis. Cras
        varius dictum risus. Nullam efficitur tellus at sem iaculis, nec
        vehicula tellus porta.
      </p>
    </div>
  );
}

export default ModalPage;
