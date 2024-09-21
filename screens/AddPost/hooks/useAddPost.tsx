import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import useRedirect from '../../../hooks/useRedirect';

export default function useAddPost() {
    const [recentMedias, setRecentMedias] = useState<any[]>([]);
    const [selectedMedias, setSelectedMedias] = useState<any>([]);
    const [isNewPostFormOpen, setIsNewPostFormOpen] = useState(false);
    const [isFilesUploading, setIsFilesUploading] = useState<Boolean>(false);

    const { handleRedirectTo } = useRedirect();

    const handlePickImage = async () => {
        try {
            setIsFilesUploading(true);
            let result = await ImagePicker.launchImageLibraryAsync({
                quality: 1,
                orderedSelection: true,
                allowsMultipleSelection: true,
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
            });

            if (!result.canceled) {
                const uris = result.assets?.map(d => ({ uri: d?.uri })).filter((d: any) => d?.uri);
                setRecentMedias([...recentMedias ?? [], ...uris ?? []]);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsFilesUploading(false);
        }
    };

    const handleSelectImage = (image: any) => {
        const isAlreadySelected = selectedMedias?.some((d: any) => d?.source?.uri === image?.source?.uri);
        if (!isAlreadySelected) setSelectedMedias([...selectedMedias ?? [], image]);
        else setSelectedMedias((prev: any) => prev?.filter((d: any) => d?.source?.uri !== image?.source?.uri))
    }

    const handleClearSelectedMedias = () => {
        setSelectedMedias([]);
    }

    const handleOpenNewPostForm = () => {
        setIsNewPostFormOpen(!isNewPostFormOpen);
    }

    const handleCloseNewPostForm = () => {
        setIsNewPostFormOpen(false);
    }

    return {
        recentMedias,
        selectedMedias,
        isFilesUploading,
        isNewPostFormOpen,
        handlePickImage,
        handleRedirectTo,
        handleSelectImage,
        handleOpenNewPostForm,
        handleCloseNewPostForm,
        handleClearSelectedMedias,
    }
}
