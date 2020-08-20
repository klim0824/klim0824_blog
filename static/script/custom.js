'use strict';

const beforePrint = () => {
  document.querySelectorAll('details').forEach(d => d.setAttribute('open', ''));
};
const afterPrint = () => {
  document.querySelectorAll('details').forEach(d => d.removeAttribute('open'));
};

if (window.matchMedia) {
  const mediaQueryList = window.matchMedia('print');
  mediaQueryList.addListener(mql => {
    if (mql.matches) {
      beforePrint();
    } else {
      afterPrint();
    }
  });
}

window.onbeforeprint = beforePrint;
window.onafterprint = afterPrint;