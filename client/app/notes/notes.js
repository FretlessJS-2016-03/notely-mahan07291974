(function() {
  angular.module('notely.notes', [
    'ui.router'
  ])
  .config(notesConfig);

  notesConfig.$inject = ['$stateProvider'];
  function notesConfig($stateProvider) {
    $stateProvider

      .state('notes', {
        url: '/notes',
        templateUrl: '/notes/notes.html',
        controller: NotesController
      })

      .state('notes.form', {
        url: '/:noteId',
        templateUrl: '/notes/notes-form.html'
      });
  }

  NotesController.$inject = ['$scope', '$state', 'NotesService'];
  function NotesController($scope, $state, NotesService) {

    NotesService.fetch().then(function() {
      $scope.notes = NotesService.getNotes();
    });

    $state.go('notes.form');
  }
})();
