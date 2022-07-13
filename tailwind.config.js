/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/index.js',
    './pages/[id].js',
    './components/Sidebar.js',
    './components/SidebarLink.js',
    './components/Feed.js',
    './components/Input.js',
    './components/Login.js',
    './components/Post.js',
    './components/Modal.js',
    './components/Comment.js',
    './components/Widgets.js',
    './components/Trending.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
