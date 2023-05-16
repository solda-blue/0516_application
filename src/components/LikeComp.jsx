import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function LikeComp() {
    const memo = useSelector((state) => (state.memo));
    const [memoList, setMemoList] = useState([]);

    useEffect(() => {
        let list = memo.filter((tmp) => tmp.like === true);
        setMemoList(list);
    }, [memo]);

    return (
        <div>
            <h1>좋아요</h1>
            {
                memoList.map((tmp) => (
                    <div key={tmp.id}>
                        <h3>{tmp.text}</h3>
                        <span>{tmp.date}</span>
                    </div>
                ))
            }
        </div>
    )
}