import React from 'react'
import { useTaskContext } from '../contexts/TaskContext';
import { useNavigate } from "react-router";

const Tree = () => { 
    let treeImage = '';
    const {point,tasks} = useTaskContext();
    const navigate = useNavigate();

    console.log('point:', point); // デバッグ用
    console.log('tasks:', tasks); // デバッグ用
    if ((point) >= 30) {
      treeImage = '/image3.png';
    } else if ((point) >= 20) {
      treeImage = '/image2.png';
    } else if ((point) >= 10) {
      treeImage = '/image1.png';
    }
  return (
    <div>  
        {treeImage && (
        <img src={treeImage} alt="木" style={{ height: '850px' }} />
      )}
      <button className='backbutton' onClick={() => navigate("/")}>ホームに戻る</button>
    </div>
  )
}

export default Tree
//
//export function Backpage() {
//  const navigate = useNavigate();
//
//  return (
//    <div>
//    <button onClick={() => navigate("App/")}>ホームに戻る</button>
//    </div>
//  );
//}