import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
        this.posts;
        this.getPosts()
    }

    getPosts = async () => {
        return fetch('https://gorest.co.in/public-api/posts')
            .then(response => response.json())
            .then(data => {
                this.setPosts(data)
                this.renderPosts()
            });
    }

    setPosts = (data) => {
        this.posts = data.data;
    }

    renderPosts = () => {
        let postsHtml = '';
        this.posts.map((item, key) => {
            postsHtml += `
                <div class="post">
                    <h2>${item.title}</h2>
                    <p class="more"><a href="/post/${item.id}" data-link>Learn more +</a></p>
                </div>
                <hr>
            `;
        })
        document.querySelector('#postsContainer').innerHTML = postsHtml
    } 

    async getHtml() {
        let html = `
            <h1>Posts</h1>
            <p>You are viewing the posts!</p>
            <div id="postsContainer">
                Loading...
            </div>`


        return html
    }
}