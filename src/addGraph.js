// module "addGraph.js"
function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
var graph = {
    options:{
        color:'white',
        thickness:'2px'
    },
    draw: function(){
        console.log('From graph draw function');
    }
}

function verifyElementPresent(classId) {
  let elem;
  return new Promise(resolve => {
    setTimeout(() => {
      // elem = player.get("stageElement").getElementsByClassName('ludo-layout');
elem = document.querySelector('.ludo-layout');
      console.log('present now: ' + classId);
      if (typeof(elem) !== undefined) {
        console.log('typeof elem: ' + typeof(elem))
        resolve(elem);
      }
    }, 200);
  });
}

// async function f1() {
//   var x = await verifyElementPresent('ludo-layout');
//   console.log(x); // 10
// }
// f1();

const add = async (numbers) => {
  let hooks = await verifyElementPresent('.ludo-layout');
  // let hooks = player.get("stageElement").getElementsByClassName('ludo-layout') // bytte til query selector

  let graphDiv = document.createElement('div');
  graphDiv.className = 'ludo-layout--graph';

  let graph = document.createElement('svg');
  graph.className = 'chart';
  let vb = document.createAttribute('viewBox');
  vb.value = [0, 0, 500, 300];
  graph.setAttributeNode(vb);

  // <polyline
  //     fill="none"
  //     stroke="#0074d9"
  //     stroke-width="3"
  //     points="
  //       0,120
  //       20,60
  //       40,80
  //       60,20"/>
  let polyline = document.createElement('polyline');
  let fill = document.createAttribute('fill');
  fill.value = 'none';
  let stroke = document.createAttribute('stroke');
  stroke.value = '#0074d9';
  let strokeWidth = document.createAttribute('stroke-width');
  strokeWidth.value = '3';
  let points = document.createAttribute('points');
  // points.value = numbers;
  points.value = "0,340 10,340 20,350 30,355 40,370"

  polyline.setAttributeNode(fill);
  polyline.setAttributeNode(stroke);
  polyline.setAttributeNode(strokeWidth);
  polyline.setAttributeNode(points);


  graphDiv.appendChild(graph);
  graph.appendChild(polyline);

  // document.body.insertBefore(graphDiv);
     hooks.insertBefore(graphDiv, hooks.firstElementChild);
     console.log("added " + graphDiv + " before " + hooks.firstElementChild);
     console.log(hooks);

}

export { cube, foo, graph, add };
