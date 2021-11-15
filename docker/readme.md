# Deploying to EC2 (or simialr compute insatnce)

install NVM https://github.com/nvm-sh/nvm

install node 16 `nvm install 16`

install PM2 `npm install pm2 -g`

### Clone repository

`git clone git@github.com:dkhorev/events-to-datadog-bridge.git`

### setup LoadBalancer (nginx on main)

install nginx on server:
`https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04`

`unlink /etc/nginx/sites-enabled/default`

`cp docker/nginx/nginx.conf /etc/nginx/nginx.conf`

prepare invidual sites:

`cp docker/nginx/dkhorev.pro.conf /etc/nginx/sites-available/dkhorev.pro.conf`

`ln -s /etc/nginx/sites-available/dkhorev.pro.conf /etc/nginx/sites-enabled/dkhorev.pro.conf`

`nginx -t`

`systemctl restart nginx`

install letsencrypt:
`https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04`

`certbot --nginx -d dkhorev.pro`

### add auto renewal

`sudo certbot renew --dry-run`


