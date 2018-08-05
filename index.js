import 'tachyons/css/tachyons.css'
import 'url-search-params-polyfill'
import h from 'hyperscript'

const search = new URLSearchParams(window.location.search)
const datUrl = search.get('dat')
if (datUrl) {
  // create dat link
  const el = h('div', [
    h('h3', 'Click on the link to go to the dat site'),
    h(
      'a',
      { className: 'link underline white', href: `dat://${datUrl}` },
      `dat://${datUrl}`
    )
  ])
  document.getElementById('link').appendChild(el)
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#installbeaker').addEventListener('click', e => {
    e.preventDefault()
    window.location.href = 'https://beakerbrowser.com'
  })
})
