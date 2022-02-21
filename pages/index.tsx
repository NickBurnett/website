import { useEffect, useState } from "react"
import Gallery from "../components/Gallery"
import InfoBlock from "../components/InfoBlock"
import Introduction from "../components/Introduction"
import Toolbar from "../components/Toolbar"
import info from "../info.json"
import { updateTheme } from "../util/theme"

export default function Index() {
  const [learnMore, setLearnMore] = useState(false)
  useEffect(() => updateTheme(), [])
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
      <InfoBlock title='About Me' info={info.about} />
      <Gallery title='Projects' items={info.projects.sort((a, b) => a.name.localeCompare(b.name))} />
      <Gallery title='Experience' items={info.experience} />
      <InfoBlock title='Contact' info={info.contact} />
    </div>
  )
}
