const EMAIL_VALIDATOR =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const PASSWORD_VALIDATOR = /(?=.*[0-9]{1,})(?=.*[a-z]{1,})(?=.*[A-Z]{1,})^[a-zA-Z0-9]{8,}$/;

export { EMAIL_VALIDATOR, PASSWORD_VALIDATOR };

export const isEmailValid = (email: string) => email.match(EMAIL_VALIDATOR);
export const isPasswordValid = (password: string) => password.match(PASSWORD_VALIDATOR);
