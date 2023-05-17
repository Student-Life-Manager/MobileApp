// process.env.TAMAGUI_TARGET = "native";

module.exports = function (api) {
	api.cache(true)
	return {
		presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
		plugins: [
			[
				'@tamagui/babel-plugin',
				{
					components: ['tamagui'],
					config: './src/tamagui.config.ts',
					logTimings: true,
					disableExtraction: process.env.NODE_ENV === 'development',
				},
			],
			[
				'module-resolver',
				{
					alias: {
						'@app': './src',
					},
				},
			],
			[
				'module:react-native-dotenv',
				{
					envName: 'APP_ENV',
					moduleName: '@env',
					path: './.env',
					blocklist: null,
					allowlist: null,
					safe: true,
					allowUndefined: true,
					verbose: false,
				},
			],
		],
	}
}
