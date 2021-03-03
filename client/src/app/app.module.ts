import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddBookmarkComponent} from './components/add-bookmark/add-bookmark.component';
import {BookmarkDetailsComponent} from './components/bookmark-details/bookmark-details.component';
import {BookmarksListComponent} from './components/bookmarks-list/bookmarks-list.component';
import {BookmarkService} from './services/bookmark.service';
import {StoreModule} from '@ngrx/store/src/store_module';
import {addBookmarkReducer} from './store/reducer/bookmark.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AddBookmarkComponent,
    BookmarkDetailsComponent,
    BookmarksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({bookmark: addBookmarkReducer}),
  ],
  providers: [
    BookmarkService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
