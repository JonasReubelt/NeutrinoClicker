import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { h, app } from "hyperapp"

const state = {
  click_count: 0
}

const actions = {
  up: () => state => ({ click_count: state.click_count + 1 })
}

const view = (state, actions) => (
  <main>
    <h1>{state.click_count}</h1>
    <button onclick={actions.up}>+</button>
  </main>
)

const main = app(state, actions, view, document.body)
