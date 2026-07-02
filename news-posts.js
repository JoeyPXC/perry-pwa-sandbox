// news-posts.js
// This is YOUR file — add a new post here after every meet and it shows up
// on the News & Updates page. Newest or oldest doesn't matter, the app
// sorts by date automatically.
//
// Easiest way to add a post: open news-composer.html (double-click it,
// no internet/server needed), fill out the form, click "Generate Code",
// and paste what it gives you into the NEWS_POSTS array below.
//
// Fields:
//   id       - anything unique, e.g. "2026-09-13-hoover-dual"
//   sport    - "xc" or "track"
//   date     - "YYYY-MM-DD"
//   title    - shows as the headline
//   body     - the post text. Supports:
//                **bold**
//                *italic*
//                [link text](https://example.com)
//                lines starting with "- " become bullet points
//                blank line = new paragraph
//   images   - array of image URLs/paths, e.g. ["news-images/2026-09-13-hoover-1.jpg"]
//              (drop the actual photo file into the news-images/ folder in
//              this repo, then reference it here by filename)

const NEWS_POSTS = [
    //     {
        id: "2026-07-02-welcome-back-worpdress-blog",
        sport: "xc",
        date: "2026-07-02",
        title: "welcome back worpdress blog",
        body: "This is ***great*** to be back. ",
        images: []
    },
