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

const add = (numbers) => {
  let hooks = player.get("stageElement").getElementsByClassName('ludo-layout') // bytte til query selector

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
  points.value = "0,40 10,40 20,50 30,55 40,70"

  polyline.setAttributeNode(fill);
  polyline.setAttributeNode(stroke);
  polyline.setAttributeNode(strokeWidth);
  polyline.setAttributeNode(points);


  graphDiv.appendChild(graph);
  graph.appendChild(polyline);

  // document.body.insertBefore(graphDiv);
     document.body.insertBefore(graphDiv, hooks.firstElementChild);
     console.log("added " + graphDiv + " before " + hooks.firstElementChild);
     console.log(hooks);

}

export { cube, foo, graph, add };
