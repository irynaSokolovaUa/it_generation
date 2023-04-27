const data = [10, 20, 30, 40];

const svg = document.querySelector('svg');
const width = parseInt(svg.getAttribute('width'));
const height = parseInt(svg.getAttribute('height'));

const barWidth = width / data.length;
const maxData = Math.max(...data);

data.forEach((value, index) => {
  const barHeight = value / maxData * height;

  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', index * barWidth);
  rect.setAttribute('y', height - barHeight);
  rect.setAttribute('width', barWidth);
  rect.setAttribute('height', barHeight);
  rect.setAttribute('fill', 'blue');

  svg.appendChild(rect);
});
