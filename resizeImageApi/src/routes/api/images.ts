/* eslint-disable @typescript-eslint/no-explicit-any */

import express from 'express';
import fs from 'fs';
import path from 'path';

import resizeController from '../../controllers/resizecontroller';

import { validate } from '../../midddlewares/validate';

const route = express.Router();

route.get(
	'/',
	validate,
	async (req: express.Request, res: express.Response): Promise<void> => {
		const filename = req.query.filename as string;
		const width = req.query.width as string;
		const height = req.query.height as string;

		if (
			fs.existsSync(
				path.join(
					__dirname,
					'../../thumbnails',
					`${filename}_${width}_${height}.jpg`
				)
			)
		) {
			readImage(
				path.join(
					__dirname,
					'../../thumbnails',
					`${filename}_${width}_${height}.jpg`
				)
			);
		} else if (fs.existsSync(`./images/${filename}.jpg`)) {
			console.log('image found');

			await resizeController(filename, width, height);
			readImage(
				path.join(
					__dirname,
					'../../thumbnails',
					`${filename}_${width}_${height}.jpg`
				)
			);
		} else {
			res.status(404).send('image not found');
			console.log('image not found');
		}

		function readImage(path: string) {
			fs.readFile(path, function (err: any, data: any) {
				if (err) throw err;
				else {
					res.writeHead(200, { 'Content-Type': 'image/jpeg' });
					res.end(data);
				}
			});
		}
	}
);

export default route;
