import React from 'react'
//import readline from 'readline';


let points: number = 300;
//const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
//  });
//  
//  rl.question('ポイント数は？', (points) => {
//    rl.close();
//  });

const Tree = () => { 
    let treeImage = '';

    if ((points) >= 30) {
      treeImage = '/tree3.png';
    } else if ((points) >= 20) {
      treeImage = '/tree2.png';
    } else if ((points) >= 10) {
      treeImage = '/tree1.png';
    }
  return (
    <div>  
        {treeImage && (
        <img src={treeImage} alt="木" style={{ height: '200px' }} />
      )}
    </div>
  )
}

export default Tree