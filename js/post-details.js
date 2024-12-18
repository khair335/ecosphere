// js/post-details.js

// Function to get query parameter by name
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Fetch post data from JSON file
fetch('./assets/postData/post.json')
  .then(response => response.json())
  .then(data => {
    const postId = parseInt(getQueryParam('id'), 10);
    const post = data.find(p => p.id === postId);

    if (post) {
      renderPostDetails(post);
      renderRelatedPosts(data, post.category, postId);
      setupNavigationButtons(data, postId);
    } else {
      console.error('Post not found');
    }
  })
  .catch(error => console.error('Error fetching post data:', error));

// Function to render post details
function renderPostDetails(post) {
  const container = document.getElementById('post-container'); // Assuming there's a container with this ID

  // Assuming post.detailsData is structured similarly to the original postDetailsData
  post.detailsData.forEach(detail => {
    const div = document.createElement('div');
    div.className = 'section-post';

    if (detail.h2) {
      const h2 = document.createElement('h2');
      h2.className = 'post-title';
      h2.innerHTML = detail.h2;
      div.appendChild(h2);
    }

    if (detail.h3) {
      const h3 = document.createElement('h3');
      h3.className = 'sub-title';
      h3.innerHTML = detail.h3;
      div.appendChild(h3);
    }

    if (detail.p) {
      detail.p.forEach(paragraph => {
        const p = document.createElement('p');
        p.className = 'post-text';
        p.innerHTML = paragraph;
        div.appendChild(p);
      });
    }

    if (detail.img) {
      const img = document.createElement('img');
      img.className = 'post-image';
      img.src = detail.img;
      div.appendChild(img);
    }

    if (detail.iframe) {
      const iframeContainer = document.createElement('div');
      iframeContainer.className = 'post-iframe';
      iframeContainer.innerHTML = detail.iframe;
      div.appendChild(iframeContainer);
    }

    if (detail.video) {
      const video = document.createElement('video');
      video.className = 'post-video';
      video.src = detail.video;
      video.controls = true;
      div.appendChild(video);
    }

    container.appendChild(div);
  });
}

// Function to render related posts
function renderRelatedPosts(data, category, postId) {
  const relatedContainer = document.getElementById('related-posts-container');
  console.log('Category:', category);
  console.log('Post ID:', postId);

  const relatedPosts = data.filter(p => p.category === category && p.id !== postId);
  console.log('Related Posts:', relatedPosts);

  const randomPosts = relatedPosts.sort(() => 0.5 - Math.random()).slice(0, 3);

  randomPosts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'related-post';

    const img = document.createElement('img');
    img.src = post.image;
    img.alt = post.title;
    postDiv.appendChild(img);

    const title = document.createElement('h3');
    title.innerText = post.title;
    postDiv.appendChild(title);

    const link = document.createElement('a');
    link.href = `post-details.html?id=${post.id}`;
    link.innerText = 'Read more';
    postDiv.appendChild(link);

    relatedContainer.appendChild(postDiv);
  });
}

// Function to set up navigation buttons
function setupNavigationButtons(data, postId) {
  const prevButton = document.querySelector('.prev-post-btn');
  const nextButton = document.querySelector('.next-post-btn');

  const currentIndex = data.findIndex(p => p.id === postId);

  if (currentIndex > 0) {
    prevButton.onclick = () => {
      const prevPostId = data[currentIndex - 1].id;
      window.location.href = `post-details.html?id=${prevPostId}`;
    };
  } else {
    prevButton.disabled = true;
  }

  if (currentIndex < data.length - 1) {
    nextButton.onclick = () => {
      const nextPostId = data[currentIndex + 1].id;
      window.location.href = `post-details.html?id=${nextPostId}`;
    };
  } else {
    nextButton.disabled = true;
  }
}

