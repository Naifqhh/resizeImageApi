import app from '../main';
import supertest from 'supertest';
import resizeController from '../controllers/resizecontroller';

const req = supertest(app);

describe('Testing Endpoints', () => {
	it('Testing if /api works ', async () => {
		await req.get('/api').expect(200);
	});
});

describe('Testing Images Endpoints', () => {
	it('Testing invalid endpoint', async () => {
		await req.get('/').expect(404);
	});
});

describe('Testing image processing', () => {
	it('Testing image processing', async () => {
		expect(async () => {
			return resizeController('img1', '99', '33');
		}).not.toThrow();
	});
});
