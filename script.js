'use strict';
const url = 'https://dummyjson.com/todos';

//Exercise 1
$(function() {
  console.log("Exercise #1 is working!");

  $('.accordion-header').on('click', function() {
    console.log("Selected header clicked");
    $(this).next('.accordion-content').slideToggle(1000);
  });
});

//Exercise 2
//request from https://dummyjson.com/todos
$(function(){
  $('button').click(function(){
    $.ajax({
      url: 'https://dummyjson.com/todos',
      success: function(result) {
        const todoList = $('.todos ul');
        todoList.empty();
  
        result.todos.forEach(todo => {
          const listItem = $('<li></li>').text(todo.todo);
          todoList.append(listItem);
        });
      },
        error: function(xhr, status, error) {
          $('.todos ul').html(`<li>Error: ${xhr.status} ${error}</li>`)
        }
    });
  });
});

