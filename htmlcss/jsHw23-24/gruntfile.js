module.exports = function(grunt) {

  grunt.initConfig({
   
  watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['css/scss/*.scss'],
      tasks: ['sass'],
    }
   } 
  });

 
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [/*'concat', 'uglify', 'cssmin',*/'sass']);
};