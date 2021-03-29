import React, { useState, useEffect } from 'react';
import { Modal } from '@/components';
import { TextareaItem, Button } from 'antd-mobile';

export default function (props) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {}, []);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (value) => {
    console.log('value', value);
  };
  return (
    <>
      <div className="footer" onClick={handleClick}>
        评论...
      </div>
      <Modal
        show={showModal}
        styleBody={{
          height: '220px',
          bottom: '0px',
          top: 'unset',
        }}
        onClose={handleClose}
      >
        <div className="modal-comment">
          <TextareaItem
            rows={2}
            count={200}
            onChange={handleChange}
          ></TextareaItem>
          <Button className="comment-btn" type="warning">评论</Button>
        </div>
      </Modal>
    </>
  );
}
