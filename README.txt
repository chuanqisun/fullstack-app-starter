Smoke test app
==============

This app just checks that your local development environment is going to be compatible with the app we'll pair on in the interview itself.

The known requirements are:

1. Docker
1. A modern-ish version of Node

To ensure things will work during the interview, please run these two commands:

./build.sh
./start.sh

This should open a web browser window automatically.

1. After a few seconds, you should see the text "Everything is working - you're ready for the interview!".
1. Open `App.tsx` and try editing the HTML (e.g. the "Waiting for server connection" text).
1. The frontend should automatically reload straight away.

If any of the above steps don't work, let us know as soon as possible so that we can figure out how to get you set up.

Thanks!