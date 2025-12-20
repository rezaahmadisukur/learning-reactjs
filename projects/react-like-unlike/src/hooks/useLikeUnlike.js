import { useState } from "react";

export const useLikeUnlike = () => {
    const [like, setLike] = useState(0);
    const [unlike, setUnlike] = useState(0);

    const handleIncrementLike = () => {
        if (like === 0) {
            setLike(like + 1);
            if (unlike > 0) {
                setUnlike(unlike - 1);
            }
        } else {
            setLike(like - 1);
        }
    };

    const handleIncrementUnlike = () => {
        if (unlike === 0) {
            setUnlike(unlike + 1);
            if (like > 0) {
                setLike(like - 1);
            }
        } else {
            setUnlike(unlike - 1);
        }
    };

    return { like, unlike, handleIncrementLike, handleIncrementUnlike };
};
