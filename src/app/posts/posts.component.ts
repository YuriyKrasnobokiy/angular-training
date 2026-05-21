import { Component, computed, effect, inject, input, model, OnInit, signal } from '@angular/core';
import { Post } from '../services/posts/post-contract';
import { PostsService } from '../services/posts/posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  protected posts = model<Post[]>([]);
  protected feachedPostsById = signal<Post[]>([]);
  readonly displayPosts = computed<Post[]>(() => this.userId() ? this.feachedPostsById() : this.posts())
  protected postsService = inject(PostsService);
  readonly userId = input<string>();

  constructor() {}

  ngOnInit() {
    this.postsService.getAllPosts().subscribe((resp)=> {
      return this.posts.set(resp)
    })
  }

  ngOnChanges() {
    if(this.userId()) {
        this.postsService.getPostsByUserId(Number(this.userId())).subscribe(resp => 
          this.feachedPostsById.set(resp)
        )
      }
  }
}
