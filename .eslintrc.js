module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'no-return-await': 'off',
		'no-underscore-dangle': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'off',
		'react/no-array-index-key': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'object-curly-newline': 'off',
		'comma-dangle': 'off',
		'react/jsx-filename-extension': 'off',
		'no-param-reassign': 'off',
		'react/react-in-jsx-scope': 'off',
		'import/no-unresolved': 'off',
		'import/order': 'off',
		'arrow-body-style': 'off',
		'no-console': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'react/jsx-closing-bracket-location': 'off',
		indent: [2, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],
		'no-tabs': 0,
		'react/prop-types': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab']
		// 'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		// 'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
	}
};
