/* eslint-disable no-unused-vars */
import React from 'react';
import Skeleton from '@common_skeleton';
import Badge from '@common_badge';
import { useTranslation } from 'next-i18next';

import cx from 'classnames';
import { getWelcome } from '@core_modules/theme/services/graphql';

const Welcome = (props) => {
    const { loading, error, storeConfig } = props;
    const { t } = useTranslation(['common']);

    if (error) {
        return <Badge danger>{t('common:error:fetchError')}</Badge>;
    }

    if (loading) {
        return (
            <div id="welcome-message-skeleton">
                <Skeleton height={38} className={cx('!top-[10px]', '!left-[25%]', '!w-[50vw]')} />
            </div>

        );
    }

    if (!loading) {
        return (
            <>
                <div
                    id="welcome-message"
                    className={cx(
                        'welcome-message',
                        'h-[36px]',
                        'text-center',
                        'font-normal',
                        'tablet:text-base',
                        'mobile:max-tablet:text-sm',
                        'bg-primary-700',
                        'text-base-white',
                        'py-[8px]',
                        'px-[16px]',
                    )}
                >
                    {storeConfig.welcome}
                </div>
            </>
        );
    }

    return null;
};

export default Welcome;
