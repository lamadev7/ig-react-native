import { useEffect, useState } from 'react';
import { RECENT_MEDIAS } from '../../../lib/constants';

export default function useAddPost() {
    const [recentMedias, setRecentMedias] = useState<any[]>();

    useEffect(() => {
        setRecentMedias(RECENT_MEDIAS);
    }, []);

    return {
        recentMedias,
    }
}
