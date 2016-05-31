module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      dist: {
        src: ['styles/variables.scss', 'styles/reset.scss', 'styles/style.scss'],
        dest: 'styles/main.scss'
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['main.scss'],
          dest: 'styles',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        //We watch and complete sass files as normal but don't live reload
        files: ['styles/*.scss'],
        tasks: ['concat', 'sass']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'sass']);
};
