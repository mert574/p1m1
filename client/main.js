import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(readCookie());
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click #add'(event, instance) {
  	let val = readCookie()+1
    writeCookie(val)
    instance.counter.set(val);
  },
  'click #sub'(event, instance) {
  	let val = readCookie()-1
    writeCookie(val)
    instance.counter.set(val);
  },
});

function readCookie() {
	return Number(document.cookie.replace(/(?:(?:^|.*;\s*)count\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
}
function writeCookie(count) {
	document.cookie = "count="+Number(count)+"; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}