export const layoutStyles = {
	shell: 'min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100',
	nav: 'bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-10',
	navContainer: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
	navLinks: 'flex items-center justify-center gap-6 py-4',
	navLink: 'px-4 py-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 font-medium',
	main: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12'
};

export const homeStyles = {
	wrapper: 'flex flex-col items-center justify-center min-h-[60vh] text-center',
	title: 'text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent',
	subtitle: 'text-xl text-slate-300 max-w-2xl'
};

export const sectionStyles = {
	container: 'max-w-3xl',
	wideContainer: 'max-w-4xl',
	title: 'text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent',
	paragraph: 'text-lg text-slate-300',
	paragraphWithMargin: 'text-lg text-slate-300 mb-6'
};

export const gradientStyles = {
	games: 'bg-gradient-to-r from-green-400 to-emerald-400',
	blog: 'bg-gradient-to-r from-cyan-400 to-blue-400',
	memes: 'bg-gradient-to-r from-orange-400 to-pink-400',
	apps: 'bg-gradient-to-r from-sky-400 to-teal-400',
	setlist: 'bg-gradient-to-r from-teal-400 to-cyan-400'
};

export const appsStyles = {
	description: 'text-lg text-slate-300 mb-8',
	grid: 'grid gap-4 sm:grid-cols-2',
	card: 'group block rounded-xl border border-slate-700/70 bg-slate-800/40 p-5 hover:border-teal-400/70 hover:bg-slate-800/70 transition-colors duration-200',
	cardTitle: 'text-2xl font-semibold text-slate-100 group-hover:text-teal-300 transition-colors duration-200',
	cardDescription: 'mt-2 text-slate-300'
};

export const panelStyles = {
	card: 'rounded-xl border border-slate-700/70 bg-slate-800/40 p-5',
	heading: 'text-slate-200 font-medium',
	list: 'mt-3 space-y-2 text-slate-300 list-disc list-inside'
};

export const errorStyles = {
	wrapper: 'flex flex-col items-center justify-center min-h-[60vh] text-center',
	status: 'text-6xl font-bold text-slate-200 mb-4',
	message: 'text-xl text-slate-400 mb-8',
	cta: 'px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-200 font-medium'
};
