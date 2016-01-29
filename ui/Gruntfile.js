module.exports = function(grunt) {

  var filesToGrunt = [
    './app/config/modules.js',
    './app/config/*.js',
    './app/app.js',
    './app/services/*.js',
    './app/controllers/*.js',
    './app/directives/*.js'
  ];

  var filesToInclude = [
    './app/assets/js/jquery.min.js',
    './app/assets/js/bootstrap.min.js',
    './app/assets/js/angular.min.js',
    './app/assets/js/ui-bootstrap-tpls.min.js',
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
      buildScripts: {
          options: {
            scriptTemplate: '<script src="{{ path }}"></script>',
            openTag: '<!-- include js start -->',
            closeTag: '<!-- include js end -->'
          },
          src: filesToInclude,
          dest: 'app/index.html'
      },
      buildLinks: {
          options: {
            scriptTemplate: '<link rel="stylesheet" type="text/css" href="{{ path.css }}">',
            openTag: '<!-- include css start -->',
            closeTag: '<!-- include css end -->'
          },
          src: ['./app/assets/css/*.css'],
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
      main: {
        files: [
          {
            expand: true, cwd: './bower_components/jquery/dist', src: 'jquery.min.js', dest: './app/assets/js'
          },
          {
            expand: true, cwd: './bower_components/bootstrap/dist', src: 'fonts/*', dest: './app/assets/'
          },
          {
            expand: true, cwd: './bower_components/bootstrap/dist', src: 'css/bootstrap.css', dest: './app/assets/'
          },
          {
            expand: true, cwd: './bower_components/bootstrap/dist', src: 'js/bootstrap.min.js', dest: './app/assets/'
          },
          {
            expand: true, cwd: './bower_components/angular-bootstrap', src: 'ui-bootstrap-tpls.min.js', dest: './app/assets/js/'
          },
          {
            expand: true, cwd: './bower_components/angular', src: 'angular.min.js', dest: './app/assets/js/'
          }
        ]
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
  grunt.loadNpmTasks('grunt-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('default', ['jshint', 'concat', 'copy', 'tags']);
  grunt.registerTask('server', ['http-server']);
  

};
