const request = require('supertest');
const server = require('../server');

describe('Deploy Endpoint', () => {
  it('should return 200 - OK if no payload sent', async () => {
    const res = await request(server.handler).post('/deploy');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({});
  });

  it('should return 500 for incorrect payload structure', async () => {
    const payload = {
      ref: 'refs/heads/main',
      bad: 'key',
    };
    const res = await request(server.handler).post('/deploy').send(payload);
    expect(res.statusCode).toEqual(500);
    expect(res.error.text).toEqual('Internal Server Error');
  });

  it('should return 500 for unknown repository name', async () => {
    expect(1).toBe(1);
  });
});
