module.exports = function(grunt){

  grunt.initConfig({
    jekyll: {build:{}},
    sass: {
      compile: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/main.css': '_sass/main.scss'
        }
      }
    },
    shell: {
      git_add: {
        command: 'git add --all'
      }
    },
    gitcommit: {
      commit_message: {
        options: {
          message: 'Grunt test',
          noVerify: true
        }
      }
    },
    gitpush: {
      push_commit: {
        options: {
          branch: 'master'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('compile', ['sass','jekyll']);
  grunt.registerTask('git', ['sass','jekyll','shell:git_add','gitcommit']);

};