const yaml = require('js-yaml')
const fs = require('fs')

PLAYBOOK_FILE = '../staging-antora-playbook.yml'

;(async () => {
  const playbook = yaml.safeLoad(fs.readFileSync(PLAYBOOK_FILE, 'utf-8').trim())
  playbook.content.sources = playbook.content.sources.filter((it) => !it.url.startsWith('https://git@'))
  fs.writeFileSync(PLAYBOOK_FILE, yaml.safeDump(playbook, { noArrayIndent: true, lineWidth: -1 }), 'utf-8')
})()
