import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  article: null,
  articleStates: null,
  actions: {
    saveArticle() {
      let article = this.get('article');

      if(article.get('hasDirtyAttributes')) {
        this.sendAction('save', article);
      }
    }
  }
});
