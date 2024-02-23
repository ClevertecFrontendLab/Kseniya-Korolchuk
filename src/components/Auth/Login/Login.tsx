import { GooglePlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Space, Typography } from 'antd';
import { EMAIL_VALIDATOR } from '../Registration/constants';
import styles from '../Login/Login.module.css';

export const Login = () => {
    return (
        <Form name='basic' initialValues={{ remember: true }} className={styles['login_form']}>
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
                        rules={[
                            {
                                required: true,
                                message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
                            },
                        ]}
                    >
                        <Input.Password placeholder='Пароль' data-test-id='registration-password' />
                    </Form.Item>
                </Space>
                <Space className={styles['form_options-wrapper']}>
                    <Form.Item
                        name='remember'
                        valuePropName='checked'
                        className={styles['form_checkbox-wrapper']}
                    >
                        <Checkbox data-test-id='login-remember'>Запомнить меня</Checkbox>
                    </Form.Item>
                    <Typography.Text
                        data-test-id='login-forgot-button'
                        style={{ textAlign: 'right' }}
                    >
                        Забыли пароль?
                    </Typography.Text>
                </Space>
            </Space>
            <Form.Item data-test-id='login-submit-button' style={{ marginBottom: 0 }}>
                <Button
                    type='primary'
                    htmlType='submit'
                    block
                    className={styles['form_btn-submit']}
                >
                    Войти
                </Button>
            </Form.Item>
            <Button icon={<GooglePlusOutlined />} block>
                Войти через Google
            </Button>
        </Form>
    );
};
