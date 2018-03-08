import window from 'global/window';
import parse from 'url-parse';
import trackPlayed from './trackPlayed';
import playedGraph from './playedGraph';

const currentUrl = parse(window.location.href, true);
const id = currentUrl.query.id || 'KMNO10005015';

var player = ludo(document.getElementById('mount-here'), [id], {
  pinnedControlOverlay: true
});

window.player = player;

trackPlayed(player);

playedGraph(player);


//player.on('playing', () => {
//  add([1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,998,998,998,996,996,996,970,970,970,970,970]);
//});
