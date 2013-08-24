
const NpmPublishStream = require('npm-publish-stream')
    , colorsTmpl = require('colors-tmpl')
    , util = require('util')
    , outf = colorsTmpl('{green}{bold}%s{/bold}@%s{/green} {blue}%s{/blue}: %s')
    , desclength = 70

function shorten (s) {
  return s.length <= desclength ? s : s.substring(0, desclength) + '...'
}

new NpmPublishStream()
.on('data', function (data) {
  console.log(
    outf
    , data.id
    , data.doc['dist-tags'].latest
    , util.inspect(data.doc.author.name)
    , shorten(data.doc.description || '')
  )
})
.on('error', console.log)

console.log(colorsTmpl('{magenta}Here comes the madness...{/magenta}'));
