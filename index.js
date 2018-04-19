const backgroundColor = '#353a44';
const foregroundColor = '#d9d9d9';
const cursorColor = '#d9d9d9';
const borderColor = '#49515f';
const selectionColor = 'rgba(106, 121, 133, 0.3)';
const colors = {
	black: '#151515',
	red: '#bc5653',
	green: '#909d63',
	yellow: '#ebc17a',
	blue: '#6a8799',
	magenta: '#b06698',
	cyan: '#c9dfff',
	white: '#d9d9d9',
	lightBlack: '#636363',
	lightRed: '#bc5653',
	lightGreen: '#a0ac77',
	lightYellow: '#ebc17a',
	lightBlue: '#7eaac7',
	lightMagenta: '#b48ead',
	lightCyan: '#acbbd0',
	lightWhite: '#f7f7f7'
};

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		foregroundColor,
		backgroundColor,
		borderColor,
		selectionColor,
		colors,
		cursorColor,
		termCSS: `
			${config.termCSS || ''}
			::selection {
				background: ${selectionColor} !important;
			}
		`,
		css: `
			${config.css || ''}
			::selection {
				background: ${selectionColor} !important;
			}
		`
	});
};
