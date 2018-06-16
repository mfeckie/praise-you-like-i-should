import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://appreciation-board-rails.herokuapp.com'
});
