const linkResolver = (doc) => {
  if (doc.type === 'work') {
    return `/${doc.uid}`
  }
  return '/'
}

module.exports = linkResolver
