/**
 * Обновляет query в адресной строке без лишнего «/?» на главной: site.ru?x=1, не site.ru/?x=1.
 */
export function replaceLocationSearch(params) {
  const qs = params.toString();
  const { pathname, hash } = window.location;
  let next;
  if (pathname === '/') {
    next = (qs ? `?${qs}` : '/') + hash;
  } else {
    next = `${pathname}${qs ? `?${qs}` : ''}${hash}`;
  }
  window.history.replaceState(null, '', next);
}
