import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function useLogin() {
    const navigation = useNavigation<any>();
    const [form, setForm] = useState({ email: null, password: null });

    const handleChange = (key: string, value: any) => {
        if (key) setForm({ ...form, [key]: value });
    }

    const handleRedirect = (path: string) => {
        if (path) navigation.navigate(path);
    }

    const handleLoginWithFacebook = () => {

    }

    return {
        form,
        handleChange,
        handleRedirect,
        handleLoginWithFacebook,
    }
}
