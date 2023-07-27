// js/dashboard_main.js
import $ from 'jquery';
import _ from 'lodash';

const countElement = $('#count');
let clickCount = 0;

function updateCounter() {
  clickCount++;
  countElement.text(`${clickCount} clicks on the button`);
}

const debouncedUpdateCounter = _.debounce(updateCounter, 300);

$(document).ready(function () {
  const body = $('body');
  body.append('<p>Holberton Dashboard</p>');
  body.append('<p>Dashboard data for the students</p>');
  body.append('<button id="start-btn">Click here to get started</button>');
  body.append('<p id="count"></p>');
  body.append('<p>Copyright - Holberton School</p>');

  $('#start-btn').on('click', debouncedUpdateCounter);
});
