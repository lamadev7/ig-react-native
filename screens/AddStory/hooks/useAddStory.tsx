import { PixelRatio } from 'react-native';
import * as MediaLibrary from "expo-media-library";
import { useEffect, useRef, useState } from 'react';
import { captureRef } from 'react-native-view-shot';
import { CameraView, CameraType, useCameraPermissions, FlashMode } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { CAMERA_ENUM } from '../../../lib/constants';

export default function useAddStory() {
    const viewRef = useRef<any>();
    const [cameraRef, setCameraRef] = useState<any>(null);
    const [facing, setFacing] = useState<CameraType>('back');
    const [flashMode, setFlashMode] = useState<FlashMode>(CAMERA_ENUM.AUTO);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [isOpenThreeDotList, setIsOpenThreeDotList] = useState<Boolean>(false);

    const navigation = useNavigation<any>();
    const [permission, requestPermission] = useCameraPermissions();

    useEffect(() => {
        applyPermisionCheck();
    }, [permission]);

    const applyPermisionCheck = async () => {
        try {
            if (!permission?.granted) await requestPermission();
            await MediaLibrary.requestPermissionsAsync();
        } catch (error) {
            console.error(error);
        }
    }

    const toggleCameraFacing = () => {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    const handleCaptureSS = async () => {
        try {
            const targetPixelCount = 1080; // If you want full HD pictures
            const pixelRatio = PixelRatio.get(); // The pixel ratio of the device
            // pixels * pixelRatio = targetPixelCount, so pixels = targetPixelCount / pixelRatio
            const pixels = targetPixelCount / pixelRatio;

            const result = await captureRef(viewRef, {
                result: 'tmpfile',
                height: pixels,
                width: pixels,
                quality: 1,
                format: 'png',
            });

            setCapturedImage(result);
        } catch (error) {
            console.error(error);
        }
    }

    const handleCaptureImage = async () => {
        try {
            if (cameraRef) {
                const photo = await cameraRef.takePictureAsync();

                setCapturedImage(photo.uri);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSaveToGallery = async () => {
        try {
            if (!capturedImage) return;

            await MediaLibrary.saveToLibraryAsync(capturedImage);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSetCameraRef = (ref: any) => {
        setCameraRef(ref);
    }

    const handleOpenThreeDotList = () => {
        setIsOpenThreeDotList(!isOpenThreeDotList);
    }

    const handleCloseCapturedImage = () => {
        setCapturedImage(null);
    }

    const handleRedirectTo = (screenName: string) => {
        if (screenName) navigation.navigate(screenName);
    }

    const handleFlashMode = () => {
        let mode = flashMode;

        if (flashMode === CAMERA_ENUM.AUTO) mode = CAMERA_ENUM.ON;
        else if (flashMode === CAMERA_ENUM.ON) mode = CAMERA_ENUM.OFF;
        else if (flashMode === CAMERA_ENUM.OFF) mode = CAMERA_ENUM.AUTO;

        setFlashMode(mode);
    }

    return {
        facing,
        viewRef,
        cameraRef,
        flashMode,
        permission,
        CameraView,
        isOpenThreeDotList,
        capturedImage,
        handleFlashMode,
        handleCaptureSS,
        handleRedirectTo,
        handleCaptureImage,
        handleSetCameraRef,
        toggleCameraFacing,
        handleSaveToGallery,
        handleOpenThreeDotList,
        handleCloseCapturedImage,
    }
}
