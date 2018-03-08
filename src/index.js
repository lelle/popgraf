import window from 'global/window';
import parse from 'url-parse';

import { cube, foo, graph, add, verifyElementPresent } from './addGraph';


const currentUrl = parse(window.location.href, true);
const id = currentUrl.query.id || 'FUHA00005980';

var player = ludo(document.getElementById('mount-here'), [id], {
  debug: true,
  pinnedControlOverlay: false
});
window.player = player;


// graph.options = {
//   color:'blue',
//   thickness:'3px'
// };
// graph.draw();
// console.log(cube(3)); // 27
// console.log(foo);    // 4.555806215962888


player.on('playing', () => {
  // var x = await verifyElementPresent('ludo-layout');
  add([1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,998,998,998,996,996,996,970,970,970,970,970]);
});
