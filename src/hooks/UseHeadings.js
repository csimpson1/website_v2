import { useState, useEffect } from 'react'

const getHeadings = (headingElements) => {
  console.log('in getHeadings')
  const headings = []
  let l1Index = 0
  let l2Index = 0
  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading
    if (heading.nodeName === 'H2') {
      headings.push({ id, title, items: [] })
      l1Index++
      l2Index = 0
    } else if (heading.nodeName === 'H3' && index > 1) {
      headings[l1Index - 1].items.push({ id, title, items: [] })
      l2Index++
    } else if (heading.nodeName === 'H4' && index > 1) {
      headings[l1Index - 1].items[l2Index - 1].items.push({ id, title, items: [] })
    }
  })
  return headings
}

export const useHeadings = () => {
  const [headings, setHeadings] = useState([])
  console.log('in useHeadings!')
  useEffect(() => {
    const headingDomElements = Array.from(document.querySelectorAll('h2, h3, h4'))
    const newHeadings = getHeadings(headingDomElements)
    setHeadings(newHeadings)
    console.log('headings')
    console.log(headings)
  }, [])
  console.log('headings after useeffect')
  console.log(headings)
  return { headings }
}

export default useHeadings
