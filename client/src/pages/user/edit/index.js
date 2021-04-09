import React, { useState, useEffect } from 'react';
import { List, Button, ImagePicker, Toast, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { isEmpty } from 'project-libs';
import { useStoreHook } from 'think-react-store';
import { ToFile } from '@/utils'

function Edit(props) {
  const {
    user: { editUserAsync, uploadAsync, uploadPath },
  } = useStoreHook();
  const { getFieldProps, validateFields } = props.form;
  const [files, setFiles] = useState([]);

  const handleChange = (files) => {
    if (files[0]?.file?.size / 1024 / 1024 < 0.1) {
      Toast.fail('图片大小不能小于0.1M');
      // return;
    }
    const imgFile = ToFile(files[0]?.url, 'avatar')
    if(imgFile) {
      const fd = new FormData()
      fd.append('avatar', imgFile)
      uploadAsync(fd)
    }
    setFiles(files);
  };

  const handleSubmit = () => {
    // if (isEmpty(files)) {
    //   Toast.fail('请上传图片!');
    //   return;
    // }
    validateFields((error, value) => {
      if (error) {
        Toast.fail('请讲信息补充完整！');
        return;
      } else {
        
        editUserAsync({
          img: uploadPath?.path,
          tel: value.tel,
          sign: value.sign
        })
      }
    });
  };

  return (
    <div className="user-edit">
      <List>
        <List.Item>
          <ImagePicker files={files} selectable={files.length < 1} onChange={handleChange}></ImagePicker>
        </List.Item>
        <List.Item>
          <InputItem
            placeholder="电话"
            {...getFieldProps('tel', {
              rules: [{ required: true }],
              initialValue: '15319175131',
            })}
          >
            电话
          </InputItem>
        </List.Item>
        <List.Item>
          <InputItem
            placeholder="签名"
            {...getFieldProps('sign', {
              rules: [{ required: true }],
              initialValue: '及时当勉励，岁月不待人',
            })}
          >
            签名
          </InputItem>
        </List.Item>
      </List>
      <Button type="warning" style={{ marginTop: '20px' }} onClick={handleSubmit}>
        修改
      </Button>

    </div>
  );
}

export default createForm()(Edit);
