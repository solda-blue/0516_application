import { createSlice } from '@reduxjs/toolkit'

export const memoSlice = createSlice({
    name: "memo",
    initialState : [
        {
            id :1,
            text : "메모입니다",
            date : "20-05-15",
            like : false
        }
    ],
    reducers : {
        // 값을 직접 수정해서 쓰는 방법
        addMemoToolkit : (state,action)=>{
            const newMemo = {
                ...action.payload,
                id : id
            }
            id++;
            state.push(newMemo)
        },
        // state값을 바로 수정하기위해 splice 사용
        deleteMemoSplice : (state, action)=>{
            //action.payload에서 memolist의 인덱스값 가져올 예정
            state.splice(action.payload,1);
        },
        toggleLike (state, action) {
            const { id } = action.payload;
            const memo = state.find((m) => m.id === id);
            if (memo) {
                memo.like = !memo.like;
            }
            console.log(memo.like);
        }
    }
})
let id = 2;

export const { addMemoToolkit, deleteMemoSplice, toggleLike } = memoSlice.actions
export default memoSlice.reducer