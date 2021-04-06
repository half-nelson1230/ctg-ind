const linkResolver = (doc) => {
  if (doc.type === 'nitty_gritty') {
    return `/${doc.uid}`
  }
  return '/'
}

module.exports = linkResolver
