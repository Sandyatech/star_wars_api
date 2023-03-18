// import react-testing methods
import { getByText, render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
// userEvent library simulates user interactions by dispatching the events that would happen if the interaction took place in a browser.
import userEvent from '@testing-library/user-event'
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import App from './App'

const server = setupServer(
    rest.get('/greeting', (req, res, ctx) => {
        return res(ctx.json({ greeting: 'hello there' }))
    }),
)

test('loads and displays greeting', async () => {
    // Render a React element into the DOM
    render(<App />)

    screen.getByText('/Luke Skywalker/i');
})
