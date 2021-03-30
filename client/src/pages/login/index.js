import React, { useState, useEffect } from 'react';
import { createForm } from 'rc-form';
import { List, InputItem, Button, Toast } from 'antd-mobile';
import { history } from 'umi';
import { useStoreHook } from 'think-react-store'
import './index.less';

function Login(props) {
  const { getFieldProps, validateFields } = props.form;
  const { user: { loginAsync }} = useStoreHook()

  useEffect(() => {}, []);

  const handleSubmit = () => {
    validateFields((error, value) => {
      if (error) {
        Toast.fail('请将信息填写完整');
        return;
      } else {
        loginAsync(value)
      }
    });
  };

  const handleClick = () => {
    history.push('/register');
  };

  return (
    <div className="login-page">
      <List renderHeader={() => '用户登陆'}>
        <List.Item>
          <InputItem
            placeholder="用户名"
            {...getFieldProps('username', {
              rules: [{ required: true }],
            })}
          >
            用户名
          </InputItem>
        </List.Item>
        <List.Item>
          <InputItem
            placeholder="密码"
            {...getFieldProps('password', {
              rules: [{ required: true }],
            })}
          >
            密码
          </InputItem>
        </List.Item>
      </List>
      <Button type="warning" onClick={handleSubmit}>
        登陆
      </Button>
      <div className="register" onClick={handleClick}>
        没有账户，去注册～
      </div>
    </div>
  );
}

export default createForm()(Login);
