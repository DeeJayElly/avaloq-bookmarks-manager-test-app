import {Bookmark} from '../models/bookmark.model';

export interface BookmarkStore {
  readonly bookmark: Bookmark[];
}
