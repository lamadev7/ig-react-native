import * as MediaLibrary from "expo-media-library";
import { useEffect, useRef, useState } from 'react';
import { captureRef } from 'react-native-view-shot';
import { PixelRatio, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
import { CameraView, CameraType, useCameraPermissions, FlashMode } from 'expo-camera';
import { CAMERA_ENUM, colorEffectMatrix, FILTER_ENUM } from '../../../lib/constants';

export default function useAddStory() {
    const viewRef = useRef<any>();
    const [blurValue, setBlurValue] = useState(0);
    const [editMode, setEditMode] = useState<any>(null);
    const [cameraRef, setCameraRef] = useState<any>(null);
    const [effectType, setEffectType] = useState<any>(null);
    const [facing, setFacing] = useState<CameraType>('back');
    const [flashMode, setFlashMode] = useState<FlashMode>(CAMERA_ENUM.AUTO);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [selectedFilterColor, setSelectedFilterColor] = useState<any>(colorEffectMatrix?.[0]);

    const navigation = useNavigation<any>();
    const [permission, requestPermission] = useCameraPermissions();
    const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

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

    const handleRotate = async () => {
        try {
            const manipResult = await manipulateAsync(
                capturedImage,
                [{ rotate: 90 }],
                { compress: 1, format: SaveFormat.PNG }
            );
            setCapturedImage(manipResult?.uri);
        } catch (error) {
            console.error(error);
        }
    };

    const handleFlip = async () => {
        try {
            const manipResult = await manipulateAsync(
                capturedImage,
                [{ flip: FlipType.Vertical }],
                { compress: 1, format: SaveFormat.PNG }
            );
            setCapturedImage(manipResult?.uri);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCloseEditMode = () => {
        setEditMode(null);
    }

    const handleApplyBlur = () => {
        setEditMode(FILTER_ENUM.BLUR)
    }

    const handleBlurValueChange = (val: number) => {
        setBlurValue(val)
    }


    const handleSelectEffectType = (_effectType: string) => {
        setEffectType(_effectType === effectType ? null : _effectType);
    }

    const handleApplySelectedFilter = (filterColor: any) => {
        setSelectedFilterColor(filterColor);
    }

    const handleApplyEditMode = (editMode: string) => {
        setEditMode(editMode);

        if (editMode === FILTER_ENUM.ROTATE) handleRotate();
        else if (editMode === FILTER_ENUM.FLIP) handleFlip();
        else if (editMode === FILTER_ENUM.BLUR) handleApplyBlur();
        else if (editMode === FILTER_ENUM.FLIP) handleFlip();
        else if (editMode === FILTER_ENUM.FLIP) handleFlip();
    }


    return {
        facing,
        viewRef,
        editMode,
        cameraRef,
        flashMode,
        blurValue,
        permission,
        CameraView,
        screenWidth,
        screenHeight,
        capturedImage,
        selectedFilterColor,
        handleFlashMode,
        handleCaptureSS,
        handleRedirectTo,
        handleCaptureImage,
        handleSetCameraRef,
        toggleCameraFacing,
        handleCloseEditMode,
        handleSaveToGallery,
        handleApplyEditMode,
        handleBlurValueChange,
        handleSelectEffectType,
        handleCloseCapturedImage,
        handleApplySelectedFilter,
    }
}
