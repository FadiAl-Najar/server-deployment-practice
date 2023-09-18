"use strict";

const validator = require("./validator");

describe("validator Middleware", () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {
      query: {},
    };

    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    next = jest.fn();
  });

  it("should send name", () => {
    req.query.name = 'Fadi';

    validator(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it("should send 500 error", () => {
    validator(req, res, next);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({
        status: 500,
        message: 'Invalid name, please provide name',
    });
    expect(next).not.toHaveBeenCalled();
  });
  
});
