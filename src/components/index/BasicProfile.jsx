import { createSignal, onMount } from 'solid-js'
import { Motion } from '@motionone/solid'
import ProfileContent from './ProfileContent'

const keyframes = {
  blinkIn: 0.01,
  blinkOut: 0.85
}

export default () => {
  let outer, inner, heightDiff

  const [percent, setPercent] = createSignal(0)

  function onScroll () {
    setPercent(
      1 -
        (outer.getBoundingClientRect().bottom -
          inner.getBoundingClientRect().bottom) /
          heightDiff
    )
    onPercentChange()
  }
  onMount(() => {
    document.getElementById('scroll').addEventListener('scroll', onScroll)
    window.addEventListener('resize', onScroll)
    heightDiff = outer.clientHeight - inner.clientHeight

    onScroll()

    return () => {
      document.getElementById('scroll').removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  })

  const [opacity, setOpacity] = createSignal(0)
  let blinking = false

  function blink (finalOpacity, count = 5) {
    blinking = true
    if (count <= 0) {
      blinking = false
      setOpacity(finalOpacity)
      return
    }
    if (opacity() === 0) {
      setOpacity(Math.random() * 0.5 + 0.5)
    } else {
      setOpacity(0)
    }
    setTimeout(() => {
      blink(finalOpacity, count - 1)
    }, Math.random() * 100)
  }

  function onPercentChange () {
    if (
      percent() > keyframes.blinkIn &&
      percent() < keyframes.blinkOut &&
      opacity() === 0
    ) {
      // Flash
      if (!blinking) blink(1)
    }
    if (
      (percent() > keyframes.blinkOut || percent() < keyframes.blinkIn) &&
      opacity() !== 0
    ) {
      // setOpacity(0)
      if (!blinking) blink(0)
    }
  }

  return (
    <section class="w-full bg-black h-300vh " ref={outer}>
      <Motion.div
        class="h-screen bg-#001712 w-full sticky top-0 op-0 px-10 box-border"
        style={{ 'box-shadow': 'inset 0px 0px 100px 5px rgba(0, 0, 0, 1)' }}
        animate={{
          opacity: opacity()
        }}
        transition={{
          duration: 0.15
        }}
        ref={inner}
      >
        <ProfileContent percent={percent()} />
      </Motion.div>
    </section>
  )
}
