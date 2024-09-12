import { useState } from "react"
import { users } from "../../../lib/constants";

export default function useHome() {
    const [latestStories, setLatestStories] = useState(users);

    return {
        latestStories,
    }
}
