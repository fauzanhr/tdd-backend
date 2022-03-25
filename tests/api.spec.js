// const { Test } = require('supertest')
const request = require('supertest')
const app = require('../app')

describe('GET /', () => {
    test("Return status: 200 and hello world message", done => {
        request(app).get('/').then(res => {
            expect(res.statusCode).toBe(200)
            expect(res.body).toHaveProperty('status')
            expect(res.body).toHaveProperty('message')
            expect(res.body.status).toBe(true)
            expect(res.body.message).toEqual("Hello World!")
            done()
        })
    })
})

//lanjutan testing kedua
describe('GET /', () => {
    test("Return status: 200 and a hello world message", done => {
        request(app).get('/').then(res => {
            expect(res.statusCode).toBe(200)
            expect(res.body).toHaveProperty('status')
            expect(res.body).toHaveProperty('message')
            expect(res.body.status).toBe(true)
            expect(res.body.message).toEqual("Hello World!")
            done()
        })
    })
})

//lanjutan post
describe('POST /', () => {
    test("test sum function POST", done => {
        const x = 5;
        const y = 10;
        const expectedResult = x + y;
        request(app).post('/sum')
                    .send({x: 5, y: 10})
                    .then(res => {
            expect(res.statusCode).toBe(200)
            expect(res.body).toHaveProperty('status')
            expect(res.body).toHaveProperty('message')
            expect(res.body.status).toBe(true)
            expect(res.body.message).toEqual("Parameters summarized!")
            expect(res.body.data).toHaveProperty('x')
            expect(res.body.data).toHaveProperty('y')
            expect(res.body.data).toHaveProperty('result')
            expect(res.body.data.x).toEqual(x)
            expect(res.body.data.y).toEqual(y)
            expect(res.body.data.result).toEqual(expectedResult)
            done()
        })
    })
})