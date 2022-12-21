import { createEffect, createSignal } from 'solid-js'

import style from './ProfileContent.module.css'

const keyframes = {
  titleIn: 0.07,
  firstQueryIn: 0.15,
  firstResultIn: 0.15
}

export default (props) => {
  const [title, setTitle] = createSignal('')
  const [firstQuery, setFirstQuery] = createSignal('mysql> ')
  const [showFirstQuery, setShowFirstQuery] = createSignal(0)
  const [showFirstResult, setShowFirstResult] = createSignal(0)

  let typing, halting

  function typeMachine (text, setter, pause = 50, index = 0) {
    if (typing && index === 0) return // Multiple calls
    if (halting) {
      halting = false
      typing = false
      return
    }
    typing = setter

    setter((title) => title + text[index])
    if (index < text.length - 1) {
      setTimeout(() => {
        typeMachine(text, setter, pause, index + 1)
      }, pause)
    } else {
      typing = false
      onPercentChange(props.percent)
    }
  }

  function onPercentChange (percent) {
    if (percent > keyframes.titleIn && title() === '') {
      typeMachine('BASIC PROFILE', setTitle)
    } else if (percent <= 0 && title() !== '') {
      setTitle('')
    }
    if (percent > keyframes.firstQueryIn && firstQuery() === 'mysql> ') {
      setShowFirstQuery(true)
      typeMachine('SELECT * FROM human WHERE name="He Li";', setFirstQuery, 20)
    } else if (
      percent <= keyframes.firstQueryIn &&
      firstQuery() !== 'mysql> '
    ) {
      setShowFirstQuery(false)

      setTimeout(() => {
        if (typing === setFirstQuery) halting = true
        setFirstQuery('mysql> ')
      }, 100)
    }

    // If firstQuery is completed: show firstResult
    if (
      showFirstQuery() &&
      firstQuery() === 'mysql> SELECT * FROM human WHERE name="He Li";'
    ) {
      setShowFirstResult(true)
    } else {
      setShowFirstResult(false)
    }
  }

  createEffect(() => onPercentChange(props.percent))

  return (
    <div class="w-full max-w-300 ma h-full py-10 color-emerald font-sans">
      <h1 class={'text-15 ' + style.fontPixel}>{title()}</h1>
      <p
        class="transition font-mono"
        classList={{
          'op-0': !showFirstQuery(),
          'op-100': showFirstQuery()
        }}
      >
        {firstQuery()}
      </p>
      <p
        class="transition font-mono"
        classList={{
          'op-0': !showFirstResult(),
          'op-100': showFirstResult()
        }}
      >
        <span>+---------------------+</span>
        <br />
        <span>| name | He Li |</span>
      </p>
      <p class="transition font-mono" />
    </div>
  )
}
