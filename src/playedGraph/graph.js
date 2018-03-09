import {svg, html, render} from 'lit-html';

const HEIGHT = 150;
const WIDTH = 1000;

export default (stageElement) => {

  const root = document.createElement('div');
  root.className = 'ludo-played-graph';
  Object.assign(root.style, {
    position: 'absolute',
    bottom: '9px',
    width: '100%',
    zIndex: 0,
    pointerEvents: 'none'
  });

  function markup(data, duration) {
    const count = Math.ceil(duration);
    const max = Math.max(...Object.values(data));
    const points = [...new Array(count)].map((x, i) => {
      const val = data[i] || 0;
      return HEIGHT - ((val / max) * HEIGHT);
    });
    const width = WIDTH/count;

    const path = points.map((val, i) => {
      return [i * width, val].join(',');
    }).join(' ');

    return html`<svg viewBox="0 0 ${WIDTH} ${HEIGHT}" preserveAspectRatio="none" width="100%" height="20%">

    <defs>
      <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#fff" stop-opacity=".8"/>
        <stop offset="30%" stop-color="#fff" stop-opacity=".6"/>
        <stop offset="100%" stop-color="#fff" stop-opacity=".1"/>
      </linearGradient>
      </defs>
      <polygon id="played"
        points="0,${HEIGHT} ${path} ${WIDTH},${HEIGHT}"
        fill="url(#gradient)"
        stroke="#fff"
        stroke-width=".5"
        stroke-linecap="round" />

      <g class="grid y-grid" height="20%">
        <line x1="0" x2="${WIDTH}" y1="${HEIGHT}" y2="${HEIGHT}" stroke="#fff" stroke-width=".5"></line>
        <line x1="0" x2="${WIDTH}" y1="${HEIGHT/2}" y2="${HEIGHT/2}" stroke="#fff" stroke-width=".5"></line>
        <line x1="0" x2="${WIDTH}" y1="${HEIGHT/4}" y2="${HEIGHT/4}" stroke="#fff" stroke-width=".5"></line>
        <line x1="0" x2="${WIDTH}" y1="${HEIGHT*3/4}" y2="${HEIGHT*3/4}" stroke="#fff" stroke-width=".5"></line>
        <line x1="0" x2="${WIDTH}" y1="${0}" y2="${0}" stroke="#fff" stroke-width=".5"></line>
      </g>
      <g class="labels y-labels" stroke="#fff" stroke-width=".5">
        <text x="${WIDTH*0.9}" y="${HEIGHT/4+10}">${parseInt(max*3/4)}</text>
        <text x="${WIDTH*0.9}" y="${HEIGHT/2+10}">${parseInt(max/2)}</text>
        <text x="${WIDTH*0.9}" y="${HEIGHT*3/4+10}">${parseInt(max/4)}</text>
        <text x="${WIDTH*0.9}" y="10">${parseInt(max)}</text>
      </g>

</svg>`
  };

  return {
    plot(data, duration) {
      console.log(data, duration);
      if (!root.parentNode) {
        const parent = stageElement.querySelector('.ludo-scrubber');
        if (parent) {
          parent.appendChild(root);
        }
      }

      render(markup(data, duration), root);
    }
  };
};
