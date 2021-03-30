import React, { useState, useEffect } from 'react';
import { createForm } from 'rc-form';
import { List, InputItem, Button, Toast } from 'antd-mobile';
import { history } from 'umi';
import { useStoreHook } from 'think-react-store'
import './index.less';

function Register(props) {
  const { getFieldProps, validateFields } = props.form;
  const { user: { registerAsync }} = useStoreHook()

  useEffect(() => {}, []);

  const handleSubmit = () => {
    validateFields((error, value) => {
      if (error) {
        Toast.fail('请将信息填写完整');
        return;
      } else {
        if(value.password !== value.password2) {
          Toast.fail('密码不一致，请检查～')
        } else {
          registerAsync(value)
        }
      }
    });
  };

  const handleClick = () => {
    history.push('/login');
  };

  return (
    <div className="register-page">
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
        <List.Item>
          <InputItem
            placeholder="确认密码"
            {...getFieldProps('password2', {
              rules: [{ required: true }],
            })}
          >
            确认密码
          </InputItem>
        </List.Item>
      </List>
      <Button type="warning" onClick={handleSubmit}>
        注册
      </Button>
      <div className="login" onClick={handleClick}>
        已经有账户，去登陆～
      </div>
    </div>
  );
}

export default createForm()(Register);
