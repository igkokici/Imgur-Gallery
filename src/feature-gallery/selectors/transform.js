const transform = {
  images: (data = []) =>
    data.map(image => ({
      link: image.images ? image.images.map(link => link.link)[0] : image.link,
      id: image.id,
      title: image.title
    }))
};

export default transform;
