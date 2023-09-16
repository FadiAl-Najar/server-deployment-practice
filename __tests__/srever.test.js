'use strict';

const server = require("../server");

const superTest = require('supertest');

const request = superTest(server.app);

describe('Testing rout', ()=>{
    it('testing /', async()=>{
        const response = await request.get('/');
        console.log(response);
        expect(response.text).toEqual("Hello World");
        expect(response.status).toEqual(200);


    })

    it('tets /data', async()=> {
        const response = await request.get('/data');
        expect(typeof response.body).toEqual("object");

    })
})