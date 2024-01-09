type History<T> = {
	addHistoryItem: (item: T) => void,
	undo: () => T | null,
	redo: () => T | null,
    history: () => T[]
}

function createHistory<T>(initHistoryAction: T): History<T> {
	let index = 0
	let historyItems: T[] = [initHistoryAction]

	return {
		addHistoryItem: (item: T) => {
			historyItems.length = index + 1
			historyItems.push(structuredClone(item))
			++index
		},
		undo: () => {
			if (index <= 0) {
				return null
			}
			--index
			return structuredClone(historyItems[index])
		},
		redo: () => {
			if (index >= historyItems.length - 1) {
				return null
			}
			++index
			return structuredClone(historyItems[index])
		},
        history: () => {
			return historyItems
		},
	}
}

export {
	createHistory,
}