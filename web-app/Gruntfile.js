module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    connect: {
      all: {
        options:{
          port: 8282,
          hostname: 'localhost',
          middleware: function(connect, options) {
            return [
              require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
              connect.static(options.base)
            ];
          }
        }
      }
    },
    open: {
      all: {
        path: 'http://localhost:<%= connect.all.options.port %>'
      }
    },
    regarde: {
      all: {
        files:['**'],
        task: 'livereload',
        tasks: ['livereload']
      }
    }
  });

  grunt.registerTask('server', [
    'livereload-start',
    'connect',
    'open',
    'regarde'
  ]);
};
