'use strict';

const logger = require('./logger');

describe('Logger Middleware', () => {
    let req
    let res
    let next
    let consoleSpy
    

    beforeEach(()=>{
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        next = jest.fn()
        res = {}
        req = {}
      })

      afterEach(()=> {
        consoleSpy.mockRestore();

      })

      it ('test log', ()=> {
        logger(req, res, next)
        expect(consoleSpy).toHaveBeenCalled();
      })

      it('test next', ()=>{
        logger(req, res, next)
        expect(next).toHaveBeenCalled();
      })
})