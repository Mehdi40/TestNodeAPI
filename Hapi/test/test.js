var assert = require('chai').assert,
    should = require('chai').should()
var db = require('../db');
var fetch = require('node-fetch');

describe('Users', () => {
    describe('getAll', () => {
        it('should return users', (done) => {
            db.query('SELECT * FROM users', (err, rows) => {
                fetch('http://localhost:3002/users')
                    .then(res => res.json())
                    .then(res => {
                        assert.deepEqual(res, rows);
                        done();
                    });
                });
        });
    })
});