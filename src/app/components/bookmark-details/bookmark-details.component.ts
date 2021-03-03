import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Bookmark} from '../../models/bookmark.model';
import {BookmarkService} from '../../services/bookmark.service';

@Component({
  selector: 'app-bookmark-details',
  templateUrl: './bookmark-details.component.html',
  styleUrls: ['./bookmark-details.component.scss']
})
export class BookmarkDetailsComponent implements OnInit {
  currentBookmark: Bookmark = {
    title: '',
    description: '',
    published: false
  };
  message = '';

  constructor(
    private bookmarkService: BookmarkService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.message = '';
    this.getBookmark(this.route.snapshot.params.id);
  }

  getBookmark(id: string): void {
    this.bookmarkService.get(id)
      .subscribe(
        data => {
          this.currentBookmark = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentBookmark.title,
      description: this.currentBookmark.description,
      published: status
    };

    this.message = '';

    this.bookmarkService.update(this.currentBookmark.id, data)
      .subscribe(
        response => {
          this.currentBookmark.published = status;
          console.log(response);
          this.message = response.message ? response.message : 'This bookmark was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateBookmark(): void {
    this.message = '';
    this.bookmarkService.update(this.currentBookmark.id, this.currentBookmark)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This bookmark was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteBookmark(): void {
    this.bookmarkService.delete(this.currentBookmark.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/bookmark']);
        },
        error => {
          console.log(error);
        });
  }
}
