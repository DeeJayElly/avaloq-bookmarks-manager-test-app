import {Component, OnInit} from '@angular/core';
import {BookmarkService} from '../../services/bookmark.service';
import {Bookmark} from '../../models/bookmark.model';

@Component({
  selector: 'app-bookmarks-list',
  templateUrl: './bookmarks-list.component.html',
  styleUrls: ['./bookmarks-list.component.scss']
})
export class BookmarksListComponent implements OnInit {
  bookmarks?: Bookmark[];
  currentBookmark?: Bookmark;
  currentIndex = -1;
  name = '';

  constructor(private bookmarkService: BookmarkService) {
  }

  ngOnInit(): void {
    this.retrieveBookmarks();
  }

  retrieveBookmarks(): void {
    this.bookmarkService.getAll()
      .subscribe(
        data => {
          this.bookmarks = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveBookmarks();
    this.currentBookmark = undefined;
    this.currentIndex = -1;
  }

  setActiveBookmark(bookmark: Bookmark, index: number): void {
    this.currentBookmark = bookmark;
    this.currentIndex = index;
  }

  removeAllBookmarks(): void {
    this.bookmarkService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.currentBookmark = undefined;
    this.currentIndex = -1;
    this.bookmarkService.findByName(this.name)
      .subscribe(
        data => {
          this.bookmarks = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
