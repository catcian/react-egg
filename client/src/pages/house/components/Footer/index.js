import React, { useState, useEffect } from 'react';
import { Modal } from '@/components';
import { TextareaItem, Button } from 'antd-mobile';
import { Toast } from 'antd-mobile';
import { useStoreHook } from 'think-react-store';
import { urlGet } from 'project-libs';

export default function (props) {
  const [showModal, setShowModal] = useState(false);
  const [commentsValue, setCommentsValue] = useState();
  const {
    house: { addCommentsAsync },
  } = useStoreHook();

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (value) => {
    setCommentsValue(value);
  };

  const handleSubmit = () => {
    if (commentsValue) {
      handleClose()
      addCommentsAsync({
        comment: commentsValue,
        houseId: urlGet('id')
      });
    } else {
      Toast.fail('请添加评论信息～');
    }
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
          <Button className="comment-btn" type="warning" onClick={handleSubmit}>
            评论
          </Button>
        </div>
      </Modal>
    </>
  );
}
