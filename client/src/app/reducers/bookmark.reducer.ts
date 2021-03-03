import {Action} from '@ngrx/store';
import {Bookmark} from '../models/bookmark.model';

export const ADD_BOOKMARK = 'ADD_BOOKMARK';

export function addBookmarkReducer(state: Bookmark[] = [], action: any) {
  switch (action.type) {
    case ADD_BOOKMARK:
      return [...state, action.payload];
    default:
      return state;
  }
}
