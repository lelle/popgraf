import window from 'global/window';
import parse from 'url-parse';

const currentUrl = parse(window.location.href, true);
const id = currentUrl.query.id || 'FUHA00005980';

var player = ludo(document.getElementById('mount-here'), [id], {
  debug: true
});
window.player = player;
