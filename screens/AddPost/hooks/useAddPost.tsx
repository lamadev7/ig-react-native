import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import useRedirect from '../../../hooks/useRedirect';

export default function useAddPost() {
    const [selectedMedias, setSelectedMedias] = useState<any>([]);
    const [recentMedias, setRecentMedias] = useState<any[]>([]);

    const { handleRedirectTo } = useRedirect();

    const handlePickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setRecentMedias([...recentMedias ?? [], { uri: result.assets[0].uri }])
        }
    };

    const handleSelectImage = (image: any) => {
        if (image) setSelectedMedias([...selectedMedias ?? [], image])
    }

    const handleClearSelectedMedias = () => {
        setSelectedMedias([]);
    }

    return {
        recentMedias,
        selectedMedias,
        handlePickImage,
        handleRedirectTo,
        handleSelectImage,
        handleClearSelectedMedias,
    }
}
