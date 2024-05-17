// DODO: fix this stupid fuckery

window.addEventListener("DOMContentLoaded", event=>{
    console.clear();
if (!CSS.supports('anchor-name: --anchor')) {
  const LIST = document.querySelector('ul');
  LIST.dataset.enhanced = true;
  let current;
  const sync = () => {
    if (current) {
      const BOUNDS = current.getBoundingClientRect();
      LIST.style.setProperty('--top', BOUNDS.top);
      LIST.style.setProperty('--right', BOUNDS.right);
      LIST.style.setProperty('--bottom', BOUNDS.bottom);
      LIST.style.setProperty('--left', BOUNDS.left);
      LIST.style.setProperty('--height', BOUNDS.height);
      LIST.style.setProperty('--width', BOUNDS.width);
    }
  };
  const UPDATE = ({ x, y }) => {
    const ARTICLE = document.elementFromPoint(x, y).closest('li').querySelector('article');
    if (ARTICLE !== current) {
      current = ARTICLE;
      sync();
    }
  };
  LIST.addEventListener('pointermove', UPDATE);
  window.addEventListener('resize', sync);
}
})