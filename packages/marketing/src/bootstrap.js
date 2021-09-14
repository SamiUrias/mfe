import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

console.log('Hi there from marketing bootstrap')

// Mount function to start up the app
const mount = (el) => {
    ReactDOM.render(
        <App/>,
        el
    )
}
// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_feed-dev-root')
    if(devRoot) {
        mount(devRoot)
    }
}

// We are running through container
// and we should export the mount function
export { mount }
