import { GooglePlusOutlined } from '@ant-design/icons';
import { Form, Space, Input, Button } from 'antd';
import { EMAIL_VALIDATOR, PASSWORD_VALIDATOR } from './constants';
import styles from '../Login/Login.module.css';

export const Registration = () => (
    <Form name='basic' autoComplete='off'>
        <Space direction='vertical'>
            <Space direction='vertical'>
                <Form.Item
                    name='email'
                    rules={[
                        {
                            required: true,
                            message: '',
                            pattern: EMAIL_VALIDATOR,
                        },
                    ]}
                >
                    <Input addonBefore='e-mail:' />
                </Form.Item>
                <Form.Item
                    name='password'
                    help={' Пароль не менее 8 символов, с заглавной буквой и цифрой'}
                    rules={[
                        {
                            required: true,
                            message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
                            pattern: PASSWORD_VALIDATOR,
                        },
                    ]}
                >
                    <Input.Password placeholder='Пароль' />
                </Form.Item>
                <Form.Item
                    name='confirmPassword'
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Пароли не совпадают'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder='Повторите пароль' />
                </Form.Item>
            </Space>
        </Space>
        <Form.Item>
            <Button type='primary' htmlType='submit' block className={styles['form_btn-submit']}>
                Войти
            </Button>
        </Form.Item>
        <Button icon={<GooglePlusOutlined />} block>
            Регистрация через Google
        </Button>
    </Form>
);
