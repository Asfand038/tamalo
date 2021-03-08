module.exports = {
  linters: {
    '**/*.+(js|ts|tsx|json)': [
      'eslint --fix',
      'prettier --write',
      'jest --findRelatedTests',
      'git add',
    ],
  },
};
