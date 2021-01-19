import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as PostActions from './reducers/post.actions';
import { Post } from './reducers/post.model';

interface AppState {
  //message: string;
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgRxFire';

  //message$: Observable<string>
  post: Observable<Post>
  text: string;

  constructor(
    private store: Store<AppState>, 
    private vcRef: ViewContainerRef, 
    private cfResolver: ComponentFactoryResolver) {
    //this.message$ = this.store.select('message');
    this.post = this.store.select('post');
  }

  editText() {
    if (typeof this.text !== 'undefined') {
      this.store.dispatch(new PostActions.EditText(this.text))
    }
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset())
  }

  upVote() {
    this.store.dispatch(new PostActions.UpVote())
  }

  downVote() {
    this.store.dispatch(new PostActions.DownVote())
  }

  async loadContact() {
    this.vcRef.clear();
    const { ContactComponent } = await import('./contact/contact.component');
    this.vcRef.createComponent(
      this.cfResolver.resolveComponentFactory(ContactComponent)
    )
  }

  async loadAbout() {
    this.vcRef.clear();
    const { AboutComponent } = await import('./about/about.component');
    this.vcRef.createComponent(
      this.cfResolver.resolveComponentFactory(AboutComponent)
    )
  }

  /*
  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' })
  }

  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' })
  }
  */
}
