$(document).ready(() => {
    $.get("/api/posts", { isfollowingOnly: true }, results => {
        outputPosts(results, $(".postsContainer"));
    })
})