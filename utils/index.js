/** dom */
export const addClass = function(ele, cla) {
  if (ele.className === '') ele.className = cla
  else if (!hasClass(ele, cla)) ele.className += ' ' + cla
}

export const removeClass = function(ele, cla) {
  if (hasClass(ele, cla)) {
    if (ele.className === cla) ele.className = ''
    else ele.className = ele.className.replace(new RegExp('(\\s|^)' + cla + '(\\s|$)'), ' ')
  }
}

export const hasClass = function(ele, cla) {
  return new RegExp('(\\s|^)' + cla + '(\\s|$)').test(ele.className)
}
