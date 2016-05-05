module.exports = function(grunt) {

  grunt.initConfig({
   concat: {
     js: {
       src: ['js/src/*.js'],
       dest: 'js/dist/script.min.js',
       options: {
         separator: ';'
       }
     },
     css: {
       src: ['css/src/*.css'],
       dest: 'css/dist/style.min.css',
       options: {
         separator: '\n\r'
       }
     }
   },
   uglify: {
     dist: {
       src: ['js/dist/script.min.js'],
       dest: 'js/dist/script.min.js'
     }
   },
   cssmin: {
     target: {
       files: [{
         expand: true,
         cwd: 'css',
         src: ['dist/style.min.css'],
         dest: 'css',
         ext: '.min.css'
       }]
     }
   }
 });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
