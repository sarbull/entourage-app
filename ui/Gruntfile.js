module.exports = function(grunt) {


  var jsLibFiles = [
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/bootstrap/dist/js/bootstrap.min.js',
    './bower_components/angular/angular.min.js',
    './bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
  ];

  var jsAppFiles = [
    './config/modules.js',
    './config/*.js',
    './services/*.js',
    './controllers/*.js',
    './directives/*.js',
    './app.js'
  ];

  var cssLibFiles = [
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/angular/angular-csp.css',
    'assets/css/lumen.css',
    'assets/css/custom.css'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    filename: '<%= pkg.name %>-<%= pkg.version %>',
    concat: {
      js: {
        src: jsAppFiles,
        dest: '<%= filename %>.min.js'
      },
      css: {
        src: cssLibFiles,
        dest: '<%= filename %>.min.css'
      }
    },
    tags: {
      buildScripts: {
          options: {
            scriptTemplate: '<script src="{{ path }}"></script>',
            openTag: '<!-- include js start -->',
            closeTag: '<!-- include js end -->'
          },
          src: jsLibFiles.concat(jsAppFiles),
          dest: 'index.html'
      },
      buildLinks: {
          options: {
            scriptTemplate: '<link rel="stylesheet" type="text/css" href="{{ path.css }}">',
            openTag: '<!-- include css start -->',
            closeTag: '<!-- include css end -->'
          },
          src: cssLibFiles,
          dest: 'index.html'
      }
    },
    jshint: {
      all: {
        src: jsAppFiles,
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
    'http-server': {
      dev: {
        root: 'app',
        port: 8080,
        host: '0.0.0.0',
        runInBackground: false,
        openBrowser : false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-script-link-tags');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('concatAll', ['concat:js', 'concat:css']);

  grunt.registerTask('default', ['jshint', 'concatAll', 'tags']);

  grunt.registerTask('dev', ['jshint', 'tags']);

  grunt.registerTask('server', ['http-server']);

  

};
