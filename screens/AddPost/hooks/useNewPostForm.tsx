import { useState } from 'react';

export default function useNewPostForm() {
    const [formData, setFormData] = useState({ medias: [], caption: null });

    const handleCaptionChange = (e: any) => {
        setFormData({ ...formData, caption: e.target.value })
    }

    const handleGoBack = () => {

    }

    return {
        formData,
        handleCaptionChange
    }
}
