import Component from '@ember/component';
import {inject} from '@ember/service';

export default Component.extend({
  store: inject(),
  name: '',
  body: '',
  actions: {
    createAppreciation(event) {
      event.preventDefault();
      const name = this.get("name")
      const body = this.get("body")
      const store = this.get("store")
      const appreciation = store.createRecord("appreciation", {
        name,
        body,
      })
      console.log(appreciation)
      appreciation.save()
    }
  }
});
