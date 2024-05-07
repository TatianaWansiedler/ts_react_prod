import React from 'react';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeCongig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Home',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'About us',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Profile',
    },
];
