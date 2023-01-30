import { Request, Response, NextFunction } from 'express';

export const validate = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const filename = req.query.filename;
	const width = req.query.width as string;
	const height = req.query.height as string;
	console.log('validating begin');
	if (filename == '') {
		res.status(400).send('filename not included ');
		console.log('filename not included');
		return;
	}
	if (width == '' || isNaN(width as unknown as number) || width == '0') {
		res.status(400).send(
			'width is missing or not a number or equal to zero'
		);
		console.log('width is missing or not a number or equal to zero');
		return;
	}
	if (height == '' || isNaN(height as unknown as number) || height == '0') {
		res.status(400).send(
			'height is missing or not a number or equal to zero'
		);
		console.log('height is missing or not a number or equal to zero');
		return;
	}
	console.log('validating ending');
	next();
};
