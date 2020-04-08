/* global module: true */
module.exports = function (grunt) {
  grunt.initConfig({
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      src: ['*.html']
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['css/*.css']
    },
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['js/*.js']
    },
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: 'copy/index.html',
        dest: 'min/index.html'
      }
    },
    imagemin: {
      files: {
        expand: true,
        src: ['./images/*.{png,jpg,gif}'],
        dest: 'min/'
      }
    },
    copy: {
      html: {
        src: './index.html',
        dest: 'copy/index.html'
      }
    },
    concat: {
      js: {
        src: ['js/*.js'],
        dest: 'concat/bundle.js'
      },
      css: {
        src: ['css/*.css'],
        dest: 'concat/bundle.css'
      }
    },
    uglify: {
      'min/bundle.min.js': 'concat/bundle.js'
    },
    cssmin: {
      'min/bundle.min.css': 'concat/bundle.css'
    },
    useminPrepare: {
      html: 'index.html',
      options: {
        dest: 'min'
      }
    },
    usemin: {
      html: ['min/index.html']
    },
    clean: {
      int: ['concat/bundle.js','concat/bundle.css','.tmp']
    }
  });

  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
  grunt.registerTask('com', ['copy', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin', 'htmlmin', 'imagemin','copy:int']);


};
