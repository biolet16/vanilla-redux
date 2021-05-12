import { createStore } from 'redux';

const add = document.getElementById('add');
const sub = document.getElementById('sub');
const contentText = document.querySelector('span');

//리듀서란 state를 업데이트 해주는 함수(오직 리듀서를 통해서만 state 수정가능)
const conuntReducer = (count = 0, action) => {
  console.log(count, action);
  if(action.type === "ADD"){
    return count+1;
  }else if(action.type === "SUB"){
    return count-1;
  }else{
    return count;
  }
  
}
const countStore = createStore(conuntReducer);
//디스패치란 리듀서에게 어떤 action을 취해야 할지 전달해주는 함수 
// countStore.dispatch({ type : "ADD"});

//subscribe는 스토어의 state 상태 변화를 감지하는 함수

