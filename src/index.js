import window from 'global/window';
import parse from 'url-parse';
import trackPlayed from './trackPlayed';

const currentUrl = parse(window.location.href, true);
const id = currentUrl.query.id || 'KMNO10005015';

var player = ludo(document.getElementById('mount-here'), [id], {
  debug: true
});
window.player = player;


trackPlayed(player);


