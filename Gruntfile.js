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
          message: function(){
    var readline = require('readline');
    var rl = readline.createInterface(process.stdin, process.stdout);
    
    rl.setPrompt('Message> ');
    rl.prompt();
    
    rl.on('line', function(line) {
        if (line === "right") rl.close();
        rl.prompt();
    }).on('close',function(){
        process.exit(0);
    });
    return 'Hello';
  },
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
    },
    prompt: {
      commit_text_message: {
	      options: {
	        questions: [{
            type: 'list',
	          message: 'Hello this is a question',
	          choices: ['test'] 
          }]
	      }	
      }
    }
  });

  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-prompt');
  grunt.loadNpmTasks('grunt-task-helper');

  grunt.registerTask('compile', ['sass','jekyll']);
  grunt.registerTask('git', ['sass','jekyll','gitcommit']);

};
