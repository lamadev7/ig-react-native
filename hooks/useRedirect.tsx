import { useNavigation } from '@react-navigation/native';

export default function useRedirect() {
    const navigation = useNavigation<any>();

    const handleRedirectTo = (path: string) => {
        if (path) navigation.navigate(path);
    }

    return {
        navigation,
        handleRedirectTo
    }
}
