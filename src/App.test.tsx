// import react-testing methods
import { getByText, render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import '@testing-library/jest-dom'
import App from './App'


describe("Sw App", () => {
    test('loads and displays character', async () => {
        render(<App />)
        const name = await screen.findAllByText(/.*Luke Skywalker.*/i);
        expect(name[0]).toBeInTheDocument();
    })
});