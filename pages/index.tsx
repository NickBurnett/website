import { useState } from "react"
import Gallery from "../components/Gallery"
import Introduction from "../components/Introduction"
import Toolbar from "../components/Toolbar"
import info from "../info.json"

export default function Index() {
  const [learnMore, setLearnMore] = useState(false)
  if (!learnMore) {
    return (
      <div id='root'>
        <Introduction learnMore={(container, fade) => {
          if (!container || !container.current) return
          const e = container.current
          e.classList.add(fade)
          setTimeout(() => setLearnMore(true), 1000)
        }} />
      </div>
    )
  }
  return (
    <div id='root'>
      <Toolbar />
      <Gallery title='Projects' items={info.projects.sort((a, b) => a.name.localeCompare(b.name))} />
      <Gallery title='Experience' items={info.experience} />
    </div>
  )
}
