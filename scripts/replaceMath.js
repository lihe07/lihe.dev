function inlineMath (code) {
  const reg = /\$.+\$/g
  for (let piece of code.matchAll(reg)) {
    piece = piece[0]
    code = code.replace(
      piece,
      '<Math>{String.raw`' + piece.substring(1, piece.length - 1) + '`}</Math>'
    )
  }

  return code
}

function mathBlock (code) {
  const reg = /\$\$[^$]+\$\$/g

  for (let piece of code.matchAll(reg)) {
    piece = piece[0]

    code = code.replace(
      piece,
      '<Math block>{String.raw`' +
        piece.substring(2, piece.length - 2).trim() +
        '`}</Math>'
    )
  }

  return code
}

export default () => {
  return {
    name: 'replace-math',
    enforce: 'pre',
    transform (src, id) {
      if (id.endsWith('.mdx')) {
        src = "import Math from '@/components/blog/Math'\n\n" + src
        src = mathBlock(src)
        src = inlineMath(src)
        return {
          code: src,
          map: null
        }
      }
    }
  }
}
