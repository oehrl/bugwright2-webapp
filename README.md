## Usage

1. Launch the [rosbridge](http://wiki.ros.org/rosbridge_suite) with Websockets and JSON mode with SSL enabled: `roslaunch rosbridge_server rosbridge_websocket.launch ssl:=true certfile:=(pwd)/host.cert keyfile:=(pwd)/host.key`. [Look here](https://serverfault.com/questions/224122/what-is-crt-and-key-files-and-how-to-generate-them) to see how to generate a self-signed certificate. *If you use a self-signed certificate, visit the rosbridge once using the browser to accept the certificate!*
2. Go to [https://oehrl.github.io/bugwright2-webapp](https://oehrl.github.io/bugwright2-webapp/) and connect to the rosbridge.
3. Select a mesh for the ship model and start to add robots.

### Demonstration
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/uS3GSjHMOkU/0.jpg)](https://youtu.be/uS3GSjHMOkU)

(Click on the image to watch the video)

## Develop

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
