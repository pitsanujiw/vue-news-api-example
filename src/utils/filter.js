import { get } from 'lodash';

const filterTopHighLight = (articles) => {
  if (!articles || !articles.length) {
    return [];
  }

  return articles.filter((article) => get(article, 'content'));
};

export default filterTopHighLight;
