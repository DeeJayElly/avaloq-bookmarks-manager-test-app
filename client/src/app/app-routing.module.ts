import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddBookmarkComponent} from './components/add-bookmark/add-bookmark.component';
import {BookmarksListComponent} from './components/bookmarks-list/bookmarks-list.component';
import {BookmarkDetailsComponent} from './components/bookmark-details/bookmark-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'bookmarks', pathMatch: 'full'},
  {path: 'bookmarks', component: BookmarksListComponent},
  {path: 'bookmarks/:id', component: BookmarkDetailsComponent},
  {path: 'add', component: AddBookmarkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
