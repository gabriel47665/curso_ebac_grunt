module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  

      less: {
        development: {
          files: {
            "css/style.css": "less/style.less"
          }
        }
      },
  
  
      uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files: {
            'js/app.min.js': ['js/app.js'] 
          }
        }
      }
    });
  

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  

    grunt.registerTask('default', ['less', 'uglify']);
  };
  