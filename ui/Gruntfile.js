module.exports = function(grunt) {

  var modulesToCopy = [
    './node_modules/angular/angular.min.js'
  ];

  var filesToGrunt = [
    './app/modules.js',
    './app/config/*.js',
    './app/services/*.js',
    './app/controllers/*.js',
    './app/directives/*.js'
  ];

  var filesToInclude = [
    './app/libs/*.js',
    './app/<%= filename %>'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    filename: 'nejucam-ui-<%= pkg.version %>.min.js',
    concat: {
      dist: {
        src: filesToGrunt,
        dest: 'app/<%= filename %>',
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        quoteStyle: 1
      },
      build: {
        src: 'app/<%= filename %>',
        dest: 'app/<%= filename %>'
      }
    },
    tags: {
      build: {
          options: {
            scriptTemplate: '<script src="{{ path }}"></script>',
            openTag: '<!-- include js start -->',
            closeTag: '<!-- include js end -->'
          },
          src: filesToInclude,
          dest: 'app/index.html'
      }
    },
    jshint: {
      all: {
        src: filesToGrunt,
        options: {
          bitwise: true,
          camelcase: true,
          curly: true,
          eqeqeq: true,
          forin: true,
          immed: true,
          indent: 2,
          latedef: true,
          newcap: true,
          noarg: true,
          noempty: true,
          nonew: true,
          quotmark: 'single',
          regexp: true,
          undef: true,
          unused: true,
          trailing: true,
          maxlen: 120,
          globals: {
            jQuery: false,
            angular: false,
            moment: false,
            console: false,
            $: false
         }
        }
      }
    },
    copy: {
      options: {
        punctuation: ''
      },
      files: {
        expand: true,
        flatten: true,
        src: modulesToCopy,
        dest: './app/libs/',
        filter: 'isFile'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-script-link-tags');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-copy');

  grunt.registerTask('default', ['jshint', 'concat', 'copy', 'tags']);

};
