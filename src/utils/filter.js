import { get } from 'lodash';

/**
 * Function for filter article for some undefined
 * @param {ReadonlyArray<Article>} articles
 * @returns {ReadonlyArray<Article>}
 */
function filterTopHighLight(articles) {
  if (!articles || !articles.length) {
    return [];
  }

  return articles.filter((article) => get(article, 'content'));
}

export default filterTopHighLight;
