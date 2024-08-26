module.exports = {
	title: 'My Project Documentation',
	tagline: 'Dinosaurs are cool',
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'byulhook',
	projectName: 'docs',
	i18n: {
	  defaultLocale: 'en',
	  locales: ['en'],
	},
	presets: [
	  [
		'classic',
		{
		  docs: {
			sidebarPath: require.resolve('./sidebars.js'),
			editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
		  },
		  blog: {
			showReadingTime: true,
			editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
		  },
		  theme: {
			customCss: require.resolve('./src/css/custom.css'),
		  },
		},
	  ],
	],
  };
  