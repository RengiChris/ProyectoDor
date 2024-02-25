export const share = (post) => {
    navigator.share({
      title: document.title,
      text: post.title,
      url: `${window.location.href}post/${post.id}`
    })
}