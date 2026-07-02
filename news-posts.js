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
    // Example — delete this once you add your first real post:
    // {
    //     id: "2026-09-13-hoover-dual",
    //     sport: "xc",
    //     date: "2026-09-13",
    //     title: "Boys Beat Hoover in Federal League Dual",
    //     body: "Great team effort tonight at Hoover.\n\n**Top finishers:**\n- Connor Reed - 1st, 16:12\n- Kyle Woods - 3rd, 16:24\n- Alex Hill - 5th, 16:41\n\nFull results are posted on [Athletic.net](https://www.athletic.net/team/7900/cross-country/2026).",
    //     images: ["news-images/2026-09-13-hoover-1.jpg"]
    // }
];
