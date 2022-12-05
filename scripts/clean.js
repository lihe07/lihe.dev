// Just remove the dist folder
import fs from 'fs'
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true })
}
