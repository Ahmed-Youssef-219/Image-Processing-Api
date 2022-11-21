import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

describe('Test  endpoints', () => {
    it('expect /image status to be 404', async () => {
        const response = await request.get('/image');
        expect(response.status).toBe(404);
    });

    it("expect '/image?name=fjord&width=150&height=150' to be 200 (the image already exists in thumnails folder)", async () => {
        const response = await request.get('/image').query({
            name: 'fjord',
            width: 150,
            height: 150,
        });
        expect(response.status).toBe(200);
    });
    it("expect '/image?name=fjord&width=600&height=600' to be 200 (the image not exist in the thumnails folder)", async () => {
        const response = await request.get('/image').query({
            name: 'fjord',
            width: 600,
            height: 600,
        });
        expect(response.status).toBe(200);
    });
});
