import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ADD_POST_BOTTOM_NAV_ITEMS_LABEL, createPostNavTabs, SCREEN_NAMES } from '../../../lib/constants';

export default function useNav({ activeTab }: any) {
    const route = useRoute();
    const navigation = useNavigation<any>();
    const [currentTab, setCurrentNav] = useState<string>(activeTab);

    useEffect(() => {
        const tabDetails = createPostNavTabs?.find(d => d.screenName === route?.name);

        if (tabDetails) setCurrentNav(tabDetails?.title);
        if (currentTab === ADD_POST_BOTTOM_NAV_ITEMS_LABEL.STORY) {
            navigation.navigate(SCREEN_NAMES.ADD_STORY);
        }
    }, [currentTab]);

    const handleSetCurrentTab = (tabName: string) => {
        const tabDetails = createPostNavTabs?.find(d => d.title === tabName);
        const screenName = tabDetails?.screenName;

        if (screenName) {
            setCurrentNav(tabName);
            navigation.navigate(screenName);
        }
    }

    return {
        currentTab,
        handleSetCurrentTab,
    }
}
