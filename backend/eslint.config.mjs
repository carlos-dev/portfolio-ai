// @ts-check
import eslint from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	{
		ignores: ['eslint.config.mjs'],
	},
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.jest,
			},
			ecmaVersion: 5,
			sourceType: 'module',
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-floating-promises': 'warn',
			'@typescript-eslint/no-unsafe-argument': 'warn',
		},
	},
	// Aplicar o plugin do Prettier por último para garantir que suas regras tenham prioridade
	eslintPluginPrettierRecommended,
	// Adicionar configurações específicas para evitar conflitos com o Prettier
	{
		rules: {
			'prettier/prettier': [
				'error',
				{
					tabWidth: 2,
					semi: false,
					singleQuote: true,
					useTabs: true,
				},
			],
			// Desativar regras de formatação do ESLint que podem conflitar com o Prettier
			indent: 'off',
			quotes: 'off',
			semi: 'off',
		},
	},
)
