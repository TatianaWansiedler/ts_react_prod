import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t, i18n } = useTranslation('main');
    return <div>{t('Main Page')}</div>;
};

export default MainPage;
