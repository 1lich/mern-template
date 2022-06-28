import React from 'react'
import ReactDOM from 'react-dom'

const target = document.getElementById("root")

const render = (component) => {
    ReactDOM.render(<component />, target)
}
render(Root)