import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isNotEmptyMessage: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('isValidEmail', 'isNotEmptyMessage'),

  actions: {

    sendMessage() {
      const email = this.get('emailAddress');
      const message = this.get('message');
      const newMessage = this.store.createRecord('contact', { email: email, message: message });

      newMessage.save().then((response) => {
        alert(`Thanks: ${this.get('emailAddress')} Your message: ${this.get('message')}`);
        this.set('responseMessage', `We got your message and we’ll get in touch soon`);
        this.set('emailAddress', '');
        this.set('message', '')
      });

    }
  }
});
