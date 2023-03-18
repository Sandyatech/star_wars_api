// import react-testing methods
import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import '@testing-library/jest-dom'
import App from './App'
import { FETCH_ERROR_500, FETCH_ERROR_418 } from './constants/error_type'



const server = setupServer(
    rest.get(`https://swapi.dev/api/people/1/`, (req, res, ctx) => {
        return res(ctx.json({ name: 'Luke Skywalker' }))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
describe("Sw App", () => {
    test('loads and displays character', async () => {
        render(<App />)
        expect(await screen.findByText(/Luke Skywalker/i)).toBeInTheDocument();
    })

    test('Checking of Status Error code 500', async () => {
        server.use(
            rest.get(`https://swapi.dev/api/people/1/`, (req, res, ctx) => {
                return res(ctx.status(500))
            })
        );
        render(<App />)
        expect(await screen.findByText(FETCH_ERROR_500)).toBeInTheDocument();
    })

    test('Checking of Status Error code 418', async () => {
        server.use(
            rest.get(`https://swapi.dev/api/people/1/`, (req, res, ctx) => {
                return res(ctx.status(418))
            })
        );
        render(<App />)
        expect(await screen.findByText(FETCH_ERROR_418)).toBeInTheDocument();
    })
});