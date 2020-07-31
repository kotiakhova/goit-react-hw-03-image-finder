import axios from 'axios';

const fetchImagesWithQuery = (searchQuery,page=1) => {
  return axios
    .get(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="${searchQuery}"&page=${page}&per_page=12&key=17463048-1bad905815e37f05ce3b4d0af`)
    .then(response => response.data.hits);
};

export default {
    fetchImagesWithQuery,
};

