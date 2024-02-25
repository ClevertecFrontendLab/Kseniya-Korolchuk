import { GooglePlusOutlined } from '@ant-design/icons';
import { Form, Space, Input, Button } from 'antd';
import { EMAIL_VALIDATOR, PASSWORD_VALIDATOR, isEmailValid, isPasswordValid } from './constants';
import styles from '../Login/Login.module.css';
import { useState } from 'react';
import { IAuthValues } from '../types';

export const Registration = () => {
    const [form] = Form.useForm();

    const [btndisabled, setbtndisabled] = useState(true);

    const onFinish = (values: IAuthValues) => {
        console.log('Success:', values);
    };

    const onValuesChange = (
        changedValues: string | undefined,
        allValues: {
            email: string | undefined;
            password: string | undefined;
            confirmPassword: string | undefined;
        },
    ) => {
        if (
            allValues.email &&
            isEmailValid(allValues.email) &&
            allValues.password &&
            isPasswordValid(allValues.password) &&
            allValues.confirmPassword === allValues.password
        ) {
            setbtndisabled(false);
        } else {
            setbtndisabled(true);
        }
    };

    return (
        <Form
            name='basic'
            autoComplete='off'
            form={form}
            onFinish={onFinish}
            onValuesChange={onValuesChange}
        >
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
                <Button
                    type='primary'
                    htmlType='submit'
                    block
                    className={styles['form_btn-submit']}
                    disabled={btndisabled}
                >
                    Войти
                </Button>
            </Form.Item>
            <Button icon={<GooglePlusOutlined />} block>
                Регистрация через Google
            </Button>
        </Form>
    );
};
