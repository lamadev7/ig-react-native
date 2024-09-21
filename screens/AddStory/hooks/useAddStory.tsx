import { Skia } from '@shopify/react-native-skia';
import * as MediaLibrary from "expo-media-library";
import { useEffect, useRef, useState } from 'react';
import { captureRef } from 'react-native-view-shot';
import { Dimensions, PanResponder } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
import { CameraView, CameraType, useCameraPermissions, FlashMode } from 'expo-camera';
import { CAMERA_ENUM, colorEffectMatrix, colors, FILTER_ENUM } from '../../../lib/constants';

export default function useAddStory() {
    const [paths, setPaths] = useState<any>([]);
    const currentPath = useRef(Skia.Path.Make());


    const viewRef = useRef<any>();
    const canvasRef = useRef<any>();
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: (evt, gestureState) => {
                const { locationX, locationY } = evt.nativeEvent;
                const newPath = Skia.Path.Make();
                newPath.moveTo(locationX, locationY); // Start path at the touch point
                currentPath.current = newPath; // Set the current path
            },
            onPanResponderMove: (evt, gestureState) => {
                const { locationX, locationY } = evt.nativeEvent;
                currentPath.current.lineTo(locationX, locationY); // Draw line to the next touch point

                setPaths((prevPaths: any) => [...prevPaths]); // Update the state to trigger a re-render
            },
            onPanResponderRelease: () => {
                setPaths((prevPaths: any) => [...prevPaths, currentPath.current]); // Add finished path to the paths array
            },
        })
    ).current;


    const [blurValue, setBlurValue] = useState(0);
    const [editMode, setEditMode] = useState<any>(null);
    const [cameraRef, setCameraRef] = useState<any>(null);
    const [effectType, setEffectType] = useState<any>(null);
    const [facing, setFacing] = useState<CameraType>('back');
    const [textColor, setTextColor] = useState(colors?.[0].value);
    const [flashMode, setFlashMode] = useState<FlashMode>(CAMERA_ENUM.AUTO);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [screenDimension, setScreenDimesion] = useState({ height: 0, width: 0 });
    const [selectedFilterColor, setSelectedFilterColor] = useState<any>(colorEffectMatrix?.[0]);
    const [originalCapturedImageUri, setOriginalCapturedImageUri] = useState<string | null>(null);

    const navigation = useNavigation<any>();
    const [permission, requestPermission] = useCameraPermissions();

    useEffect(() => {
        const { width, height } = Dimensions.get('screen');
        setScreenDimesion({ width, height });
    }, []);

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
            const result = await captureRef(viewRef, {
                result: 'tmpfile',
                height: screenDimension.height,
                width: screenDimension.width,
                quality: 1,
                format: 'png',
            });

            setCapturedImage(result);
            setOriginalCapturedImageUri(result);
        } catch (error) {
            console.error(error);
        }
    }

    const handleCaptureImage = async () => {
        try {
            if (cameraRef) {
                const photo = await cameraRef.takePictureAsync();

                setCapturedImage(photo.uri);
                setOriginalCapturedImageUri(photo.uri);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSaveToGallery = async () => {
        try {
            const result = await captureRef(canvasRef, {
                result: 'tmpfile',
                quality: 1,
                format: 'png',
                width: screenDimension.width,
                height: screenDimension.height,
            });

            await MediaLibrary.saveToLibraryAsync(result);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSetCameraRef = (ref: any) => {
        setCameraRef(ref);
    }

    const handleResetEdit = ({ isBackToCamera }: { isBackToCamera?: Boolean }) => {
        setPaths([]);
        setEffectType(null);
        setSelectedFilterColor(colorEffectMatrix?.[0]);

        if (!isBackToCamera) {
            setCapturedImage(originalCapturedImageUri);
        } else {
            setEditMode(null);
        }
    }

    const handleCloseCapturedImage = () => {
        setCapturedImage(null);
        handleResetEdit({ isBackToCamera: true });
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

    const handleApplyTextColor = (color: string) => {
        setTextColor(color);
    }

    return {
        paths,
        facing,
        viewRef,
        editMode,
        textColor,
        canvasRef,
        cameraRef,
        flashMode,
        blurValue,
        permission,
        CameraView,
        panResponder,
        capturedImage,
        screenDimension,
        selectedFilterColor,
        handleFlashMode,
        handleCaptureSS,
        handleResetEdit,
        handleRedirectTo,
        handleCaptureImage,
        handleSetCameraRef,
        toggleCameraFacing,
        handleCloseEditMode,
        handleSaveToGallery,
        handleApplyEditMode,
        handleApplyTextColor,
        handleBlurValueChange,
        handleSelectEffectType,
        handleCloseCapturedImage,
        handleApplySelectedFilter,
    }
}
