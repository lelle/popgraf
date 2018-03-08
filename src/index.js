import window from 'global/window';
import parse from 'url-parse';
import trackPlayed from './trackPlayed';

import { cube, foo, graph, add } from './addGraph';


const currentUrl = parse(window.location.href, true);
const id = currentUrl.query.id || 'KMNO10005015';

var player = ludo(document.getElementById('mount-here'), [id], {
  debug: true,
  pinnedControlOverlay: true
});
window.player = player;


// graph.options = {
//   color:'blue',
//   thickness:'3px'
// };
// graph.draw();
// console.log(cube(3)); // 27
// console.log(foo);    // 4.555806215962888
trackPlayed(player);


player.on('playing', () => {
  add([1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,998,998,998,996,996,996,970,970,970,970,970]);
});
