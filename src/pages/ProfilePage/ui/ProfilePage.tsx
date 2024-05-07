import { profileReducer } from 'entities/Profile';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>

            <div className={classNames('', {}, [className])}>{t('Profile page')}</div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
