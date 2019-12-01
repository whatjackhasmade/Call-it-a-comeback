export function autoParagraph(html) {
  return "<p>" + html.split(/\n/).join("</p>\n<p>") + "</p>"
}

export function decodeHTML(html) {
  html = html.replace("amp;", "")
  return html.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec)
  })
}

/* TODO: Refactor when image?imageFile is possible */
export function isFluid(image) {
  if (!image) return false
  if (!image.imageFile) return false
  if (!image.imageFile.childImageSharp) return false
  if (!image.imageFile.childImageSharp.fluid) return false
  return true
}

export function httpTohttps(html) {
  return html.replace("http://", "https://")
}

export function isEmptyObject(obj) {
  return Object.entries(obj).length === 0 && obj.constructor === Object
}

export function isInternal(url) {
  if (!url) return false
  if (url.startsWith("mailto:")) return false
  if (url.startsWith("tel:")) return false
  if (url.startsWith("http")) return false
  return true
}

export function randomID() {
  return Math.random()
    .toString(36)
    .substring(7)
}

export function removeDimensions(html) {
  html = html.replace(/width="[^"]*"/g, "")
  html = html.replace(/height="[^"]*"/g, "")
  return html
}

export function removeOrphans(html) {
  return html.replace(/ ([^ ]*)$/, " $1")
}

export function slugTitle(html) {
  html = html.replace("-", " ")
  html = html.toLowerCase().split(" ")
  for (var i = 0; i < html.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    html[i] = html[i].charAt(0).toUpperCase() + html[i].substring(1)
  }
  // Directly return the joined string
  return html.join(" ")
}

export function YouTubeGetID(url) {
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)
  return url[2] !== undefined ? url[2].split(/[^0-9a-z_]/i)[0] : url[0]
}
