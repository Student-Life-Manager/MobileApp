module.exports = {
	endOfLine: 'auto',
	useTabs: true,
	bracketSameLine: false,
	singleAttributePerLine: true,
	quoteProps: 'consistent',
	tabWidth: 2,
	printWidth: 100,
	singleQuote: true,
	jsxSingleQuote: true,
	trailingComma: 'all',
	bracketSpacing: true,
	semi: false,
	overrides: [
		{
			files: '*.svg',
			options: {
				parser: 'html',
			},
		},
	],
}
