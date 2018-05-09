module.exports = function(grunt) {
  grunt.initConfig({
    bower_concat: {
      all: {
        dest: {
          'js': 'public/javascripts/vendor/all.min.js',
        },
        dependencies: {
          'underscore': 'jquery',
          'backbone': 'underscore',
        },
      }
    },
    uglify: {
      my_target: {
        files: {
          'public/javascripts/vendor/all.min.js': ['public/javascripts/vendor/all.min.js']
        }
      }
    },
    handlebars: {
      compile: {
        options: {
          processContent: removeWhitespace,
          processName: extractFilename
        },
        files: {
          'public/javascripts/vendor/all.min.js': ['handlebars/**/*.hbs']
        }
      }
    }
  });

  [
    'grunt-bower-concat',
    'grunt-contrib-uglify',
    'grunt-contrib-handlebars'
  ].forEach(function(task) {
    grunt.loadNpmTasks(task);
  });

  grunt.registerTask('default', ['bower_concat', 'uglify']);
};

function removeWhitespace(template) {
  return templace.replace(/ {2,}/mg, '').replace(/(\r|\n)/mg, '');
}

function extractFilename(file) {
  return template.match(/\/(.*).hbs$/).pop();
}

