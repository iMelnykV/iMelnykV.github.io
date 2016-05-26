module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['scss/*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        files: ['css/scss/*.scss'],
        tasks: ['sass'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);
};
