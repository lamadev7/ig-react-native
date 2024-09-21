

export default function useNotifCard() {
    const handleFollowBack = (id: string) => {
        console.log({ followId: id });
    }

    return {
        handleFollowBack,
    }
}
