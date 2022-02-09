import { useState } from "react";
import Gallery from "../components/Gallery";
import Introduction from "../components/Introduction";
import Toolbar from "../components/Toolbar";

export default function Index() {
  const [learnMore, setLearnMore] = useState(false)
  if (!learnMore) {
    return (
      <div id='root'>
        <Introduction learnMore={() => setLearnMore(true)} />
      </div>
    )
  }
  return (
    <div id='root'>
      <Toolbar />
      <Gallery title='Projects' />
    </div>
  )
}
