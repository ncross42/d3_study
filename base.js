function rectangle() {
  let node = document.getElementById('pID');
  let rect = node.getBoundingClientRect();
  console.log('width: ' + rect.width);
  console.log('height: ' + rect.height);
  console.log('top: ' + rect.top);
  console.log('right: ' + rect.right);
  console.log('bottom: ' + rect.bottom);
  console.log('left: ' + rect.left);
}

function divGridline() {
  return;
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

window.onload = function(){
  rectangle();
  divGridline();

  window.addEventListener('resize', () => {
    console.log('addEventListener - resize');
    divGridline();
  }, true);
}