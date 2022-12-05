import { createSignal, onMount } from 'solid-js'

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
  }
  onMount(() => {
    document.getElementById('scroll').addEventListener('scroll', onScroll)
    window.addEventListener('resize', onScroll)

    heightDiff = outer.clientHeight - inner.clientHeight

    return () => {
      document.getElementById('scroll').removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  })

  return (
    <section class="w-full bg-emerald h-200vh " ref={outer}>
      <div
        class="h-screen bg-emerald-5 flex flex-col w-full sticky top-0"
        ref={inner}
      >
        <h1>Basic Profile</h1>
        <p>Animation: {percent() * 100}%</p>
      </div>
    </section>
  )
}
