const binaries = '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)$';
const audio = '\\.(mp4|webm|wav|ogg|mp3|m4a|aac|oga)$';
module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: ['**/*.test.(ts|tsx|js|jsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    [audio]: '<rootDir>/dev/jest/mock/emptyAudio.js',
    [binaries]: '<rootDir>/dev/jest/mock/empty.js',
    '\\.css$': '<rootDir>/dev/jest/mock/empty.js',
    '\\.svg$': '<rootDir>/dev/jest/mock/svg.js'
  }
};
