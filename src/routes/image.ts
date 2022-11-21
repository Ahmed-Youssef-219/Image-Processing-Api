import express from 'express';
import useSharp from '../utilities/useSharp';
import { existsSync } from 'node:fs';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response): void => {
    const name = req.query.name as unknown as string;
    const width = req.query.width as unknown as string;
    const height = req.query.height as unknown as string;

    if (existsSync(`./src/thumnails/${name}_${width}_${height}.jpg`)) {
        console.log('image already exists');
        res.status(304).sendFile(`${name}_${width}_${height}.jpg`, {
            root: `${process.cwd()}/src/thumnails`,
        });
    } else {
        if (existsSync(`./src/assets/${name}.jpg`)) {
            useSharp(name, width, height);
            setTimeout(() => {
                res.status(200).sendFile(`${name}_${width}_${height}.jpg`, {
                    root: `${process.cwd()}/src/thumnails`,
                });
            }, 300);
        } else {
            res.status(404).json({
                message:
                    'please enter a correct image name in the assets folder and a suitable width and height :(',
            });
        }
    }
});

export default router;

/* 
app.get('/file/:name', (req, res, next) => {
  const options = {
    root: path.join(__dirname, 'public'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  const fileName = req.params.name
  res.sendFile(fileName, options, (err) => {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})
*/

/* sharp("./src./fjord.jpg").resize(500,500).toFile("fjord_500_500.jpg") */
