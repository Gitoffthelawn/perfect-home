import {on, off, fire} from './pubsub';
export const EVENT = {
	on,
	off,
	fire,


	bookmark: {
		added: 'bookmark-added',
		moved: 'bookmark-moved',
		removed: 'bookmark-removed',
		edit: 'bookmark-edit',
		delete: 'bookmark-delete',
		deleteThumb: 'bookmark-thumb-del',
		clearThumb: 'bookmark-thumb-clear',
		changeThumb: 'bookmark-thumb-change',
	},
	settings: {
		loaded: 'settings-loaded',
		imported: 'settings-imported',
	},
	dockedFolders: {
		loaded: 'docked-folders-loaded',
		changed: 'docked-folders-changed',
	},



};
