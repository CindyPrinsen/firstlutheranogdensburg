const rssUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCZDFgiBOfX-FmJ8Y7K2cdXw';

fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`)
  .then(response => response.json())
  .then(data => {
    if (!data.items || data.items.length === 0) {
      throw new Error('No videos found');
    }
    const latestVideo = data.items[0];
    const videoId = latestVideo.link.split('=')[1];

    document.getElementById('latest-video').innerHTML = `
      <iframe 
        src="https://www.youtube.com/embed/${videoId}" 
        title="Latest YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;

    document.getElementById('youtube-channel-link').href = 'https://www.youtube.com/channel/UCZDFgiBOfX-FmJ8Y7K2cdXw';
  })
  .catch(err => {
    console.error('Failed to load video:', err);
    document.getElementById('latest-video').innerText = 'Could not load video.';
  });
