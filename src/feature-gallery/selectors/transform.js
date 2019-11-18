const transform = {
  images: (data = []) =>
    data.map(image => ({
      link: image.images ? image.images.map(link => link.link)[0] : image.link,
      id: image.id,
      title: image.title,
      downs: image.downs,
      ups: image.ups,
      score: image.score,
      description: image.description
    }))
};

export default transform;
