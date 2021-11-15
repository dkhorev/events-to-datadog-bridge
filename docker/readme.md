# Deploying to EC2 (or simialr compute insatnce)

install NVM https://github.com/nvm-sh/nvm

install node 16 `nvm install 16`

install PM2 `npm install pm2 -g`

install pm2-logrotate `pm2 install pm2-logrotate`

install NEst CLI `npm i -g @nestjs/cli`

### Clone repository

`git clone git@github.com:dkhorev/events-to-datadog-bridge.git`

`cd events-to-datadog-bridge && npm i`

`nest build --webpack`

`pm2 start dist/main.js`

`pm2 startup` and apply script that it outputs

`pm2 save`

### setup LoadBalancer (nginx on main)

install nginx on server:
`https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04`

`sudo unlink /etc/nginx/sites-enabled/default`

`sudo cp docker/nginx/nginx.conf /etc/nginx/nginx.conf`

prepare invidual sites:

`sudo cp docker/nginx/api-events.dkbx.ru.conf /etc/nginx/sites-available/api-events.dkbx.ru.conf`

`sudo ln -s /etc/nginx/sites-available/api-events.dkbx.ru.conf /etc/nginx/sites-enabled/api-events.dkbx.ru.conf`

`sudo nginx -t`

`sudo systemctl restart nginx`

install letsencrypt:
`https://certbot.eff.org/instructions?ws=nginx&os=ubuntu-20`

`certbot --nginx -d api-events.dkbx.ru`

### add auto renewal

`sudo certbot renew --dry-run`


