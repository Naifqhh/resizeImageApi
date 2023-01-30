import sharp from 'sharp';
import path from 'path';

const resizeController = async (
	filename: string,
	width: string,
	height: string
): Promise<string> => {
	await sharp('./images/' + filename + '.jpg')
		.resize({
			width: parseInt(width),
			height: parseInt(height),
		})
		.toFile(path.join(
			__dirname,
			'../thumbnails',
			`${filename}_${width}_${height}.jpg`
		));
	return 'grerat';
};

export default resizeController;
