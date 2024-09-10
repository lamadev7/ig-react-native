import { useState } from "react"
import { users } from "../constant";

export default function useHome() {
    const [latestStories, setLatestStories] = useState(users);

    return {
        latestStories,
    }
}
