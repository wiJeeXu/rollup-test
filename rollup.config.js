import path from 'path'
export default {
  input: path.resolve(__dirname, 'main.js'),
  output: {
    file: 'dist/bundle.js',
    format: 'es'
  }
}
