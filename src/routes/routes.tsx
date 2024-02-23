import { ChangePassword } from '@components/Auth/ChangePassword/ChangePassword';
import { ConfirmEmail } from '@components/Auth/ConfirmEmail/ConfirmEmail';
import { Result } from '@components/Results/Result';
import { LayoutAuthPage } from '@pages/layouts/layout-auth-page/LayoutAuthPage';
import { LayoutMainPage } from '@pages/layouts/layout-main-page/LayoutMainPage';
import { LoginPage } from '@pages/login-page/LoginPage';
import { MainPage } from '@pages/main-page/MainPage';
import { NotFoundPage } from '@pages/notFound-page/NotFoundPage';
import { RegisterPage } from '@pages/register-page/RegisterPage';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
    const isAuth = true;

    return (
        <Routes>
            <Route index element={<Navigate to={'/auth'} />} />
            <Route path='/main' element={<LayoutMainPage />}>
                <Route
                    index={true}
                    element={isAuth ? <MainPage /> : <Navigate to={'/auth'} replace />}
                />
            </Route>
            <Route
                path='/auth'
                element={isAuth ? <Navigate to={'/main'} replace /> : <LayoutAuthPage />}
            >
                <Route index={true} element={<LoginPage />} />
                <Route path='registration' element={<RegisterPage />} />
                <Route path={'confirm-email'} element={<ConfirmEmail />} />
                <Route path={'change-password'} element={<ChangePassword />} />
            </Route>
            <Route path='/result' element={<Result />}>
                <Route path='succes'></Route>
                <Route path='error'></Route>
                <Route path='error-login'></Route>
                <Route path='error-user-exist'></Route>
                <Route path='error-check-email'></Route>
                <Route path='error-check-email-no-exist'></Route>
                <Route path='error-change-password'></Route>
                <Route path='succes-change-password'></Route>
            </Route>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
};
