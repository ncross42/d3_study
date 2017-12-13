function divGridline() {
  const ww = window.innerWidth;
  const wh = window.innerHeight; // document.body.scrollHeight;
  console.log(ww,wh)
  let divGrid = document.getElementById('divGrid');
  divGrid.style.width = ww;
  divGrid.style.height = wh;
  let svgGrid = document.getElementById('svgGrid'); // divGrid.firstChild;
  svgGrid.setAttribute('width', ww);
  svgGrid.setAttribute('height', wh);
  svgGrid.innerHTML = '';
  // 가로줄
  for ( i=0; i<wh; i+=10 ) {
    c = (i%100) ? 'lightgray' : 'gray';
    svgGrid.innerHTML += `<line x1=0 x2=${ww} y1=${i} y2=${i} stroke=${c}>`;
  }
  for ( i=0; i<ww; i+=10 ) {
    c = (i%100) ? 'lightgray' : 'gray';
    svgGrid.innerHTML += `<line x1=${i} x2=${i} y1=0 y2=${wh} stroke=${c}>`;
  }
}

function divGridline2() {
  const ww = window.innerWidth;
  const wh = window.innerHeight; // document.body.scrollHeight;
  console.log(ww,wh)
  let divGrid = document.getElementById('divGrid');
  divGrid.style.width = ww;
  divGrid.style.height = wh;
  let svgGrid = document.getElementById('svgGrid'); // divGrid.firstChild;
  svgGrid.setAttribute('width', ww);
  svgGrid.setAttribute('height', wh);
  svgGrid.innerHTML = '';
  let htmlResult = '';
  // 가로줄
  for ( i=0; i<wh; i+=10 ) {
    c = (i%100) ? 'lightgray' : 'gray';
    htmlResult += `<line x1=0 x2=${ww} y1=${i} y2=${i} stroke=${c} />`;
  }
  for ( i=0; i<ww; i+=10 ) {
    c = (i%100) ? 'lightgray' : 'gray';
    htmlResult += `<line x1=${i} x2=${i} y1=0 y2=${wh} stroke=${c} />`;
  }
  svgGrid.innerHTML = htmlResult;
}

function init() {
  d3.select(document.body)
    .append('svg')
    .attr('id', 'first')
    .attr('width', 150)
    .attr('height', 100)
    .style('position', 'absolute')
    .style('top', '350px')
    .style('left', '100px');
}

function rect1() {
  d3.select('#first')
    .append('rect')
    .attr('x', 100)
    .attr('y', 50)
    .attr('width', 100)
    .attr('height', 50)
    .attr('fill', 'blue')
    .attr('stroke', 'red')
    .attr('stroke-width', 5)
    .attr('rx', 5)
    .attr('ry', 5);
}

function em1() {
  const el = document.querySelector('em');
  console.log('nodeName: ', el.nodeName);
  const d3em = d3.select('em');
  const g = d3em._groups[0];
  console.log('nodeName: ', g[0].nodeName);
  const p = d3em._parents[0];
  console.log('nodeName: ', p.nodeName);
}

function em2() {
  const el = document.querySelectorAll('em');
  console.log('len: ', el.length);
  const d3em = d3.selectAll('em');
  const g = d3em._groups[0];
  console.log('em len: ', g.length);
  const r = d3.selectAll('rect');
  console.log('rect len: ', r._groups[0].length);
}

window.onload = function(){
  em2();
  em1();
  rect1();
  init();

  divGridline();
  window.addEventListener('resize', () => {
    console.log('addEventListener - resize');
    console.time('resize time');
    divGridline();
    console.timeEnd('resize time');
  }, true);
}