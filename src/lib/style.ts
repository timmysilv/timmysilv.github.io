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

export const setlistStyles = {
	listSection: 'mt-4',
	emptyState: 'rounded-lg border border-dashed border-slate-600 p-4 text-slate-300',
	list: 'space-y-3',
	listItem: 'rounded-lg border border-slate-700 bg-slate-900/40 p-4',
	listItemButton: 'w-full text-left rounded-lg border border-slate-700 bg-slate-900/40 p-4 hover:border-cyan-400/50 hover:bg-slate-900/60 transition-colors duration-200',
	listHeader: 'flex items-start justify-between gap-3',
	setlistName: 'text-lg font-medium text-slate-100',
	meta: 'text-sm text-slate-400 mt-1',
	openButton: 'px-3 py-2 rounded-lg bg-teal-500/20 text-teal-200 border border-teal-400/40 hover:bg-teal-500/30 transition-colors duration-200',
	activeBadge: 'text-xs text-teal-200 bg-teal-500/20 border border-teal-400/40 rounded-full px-2 py-1',
	form: 'space-y-3',
	label: 'block text-sm font-medium text-slate-300',
	input: 'w-full rounded-lg border border-slate-600 bg-slate-900/50 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400/50',
	createButton: 'w-full sm:w-auto px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-100 border border-cyan-400/40 hover:bg-cyan-500/30 transition-colors duration-200 font-medium mt-4',
	modalOverlay: 'fixed inset-0 z-20 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4',
	modalCard: 'w-full max-w-md rounded-xl border border-slate-700 bg-slate-900 p-5 shadow-xl',
	modalTitle: 'text-xl font-semibold text-slate-100 mb-4',
	modalActions: 'flex justify-end gap-3 pt-2',
	cancelButton: 'px-4 py-2 rounded-lg border border-slate-600 text-slate-200 hover:bg-slate-700/50 transition-colors duration-200',
	modalCreateButton: 'px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-100 border border-cyan-400/40 hover:bg-cyan-500/30 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed',
	songList: 'space-y-3 mt-4',
	songCard: 'rounded-lg border border-slate-700 bg-slate-900/50 p-3',
	songCardDragging: 'opacity-60 border-cyan-400/50',
	songRow: 'flex items-center gap-3',
	dragHandle: 'cursor-grab active:cursor-grabbing select-none text-slate-400 hover:text-cyan-300 text-lg leading-none px-1',
	songTitle: 'text-base sm:text-lg font-medium text-slate-100',
	songBpm: 'text-sm text-slate-300',
	addSongButton: 'w-full mt-4 px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-100 border border-emerald-400/40 hover:bg-emerald-500/30 transition-colors duration-200 font-medium',
	notFoundLink: 'inline-block mt-4 px-4 py-2 rounded-lg border border-slate-600 text-slate-200 hover:bg-slate-700/50 transition-colors duration-200'
};

export const errorStyles = {
	wrapper: 'flex flex-col items-center justify-center min-h-[60vh] text-center',
	status: 'text-6xl font-bold text-slate-200 mb-4',
	message: 'text-xl text-slate-400 mb-8',
	cta: 'px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-200 font-medium'
};
