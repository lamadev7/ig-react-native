import { useRef, useState } from 'react';
import { captureRef } from 'react-native-view-shot';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { PixelRatio } from 'react-native';

export default function useAddStory() {
    const viewRef = useRef<any>();
    const [cameraRef, setCameraRef] = useState<any>(null);
    const [facing, setFacing] = useState<CameraType>('back');
    const [capturedImage, setCapturedImage] = useState<string | null>(null);

    const [permission, requestPermission] = useCameraPermissions();

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

    const handleSetCameraRef = (ref: any) => {
        setCameraRef(ref);
    }

    return {
        facing,
        viewRef,
        cameraRef,
        permission,
        CameraView,
        capturedImage,
        handleCaptureSS,
        handleCaptureImage,
        handleSetCameraRef,
        requestPermission,
        toggleCameraFacing,
    }
}
