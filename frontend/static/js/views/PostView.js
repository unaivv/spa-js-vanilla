import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.post;
        this.getPost();
    }

    getPost = async () => {
        fetch('https://gorest.co.in/public-api/posts?id=' + this.postId)
            .then(response => response.json())
            .then(data => {
                this.setPost(data)
            });
    }

    setPost = (data) => {
        const post = data.data[0]
        this.setTitle(post.title)
        this.post = post
        this.renderPost()
    }

    renderPost = () => {
        const postHtml = `
            <h1>${this.post.title}</h1>
            <p>${this.post.body}</p>
        `
        document.querySelector('#postContainer').innerHTML = postHtml
    }

    async getHtml() {
        return `
            <div id="postContainer">
                Loading...
            </div>
        `;
    }
}
