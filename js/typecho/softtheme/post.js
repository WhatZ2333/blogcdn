
let post_content_a = document.querySelectorAll(".post-content a");
for (let i = 0; i < post_content_a.length; i++) {
    const element = post_content_a[i];
    element.setAttribute("target", "_blank");
}
