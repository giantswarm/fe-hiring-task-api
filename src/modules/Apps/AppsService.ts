import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {App} from './App';

@Injectable()
export class AppsService {
  public findAll(): App[] {
    return this.apps;
  }

  public findOne(id: string): App {
    const app: App | undefined = this.apps.find(
        (app: App): boolean => app.id === id,
    );

    if (!app) {
      throw new HttpException('There is no app with that id.',
          HttpStatus.NOT_FOUND);
    }

    return app;
  }

  private readonly apps: App[] = [
    new App({
      id: 'asdm123312asdnboqwedsa',
      name: 'prometheus-operator-app-chart',
      description: 'A Helm Chart for Prometheus Operator.',
      version: '0.2.0',
      author: 'Giantswarm',
      iconURL: 'https://raw.githubusercontent.com/prometheus/prometheus.github.io/master/assets/prometheus_logo-cb55bb5c346.png',
      url: 'https://github.com/giantswarm/prometheus-operator-app',
      readmeURL: 'https://raw.githubusercontent.com/giantswarm/prometheus-operator-app/v0.1.1/README.md',
    }),
    new App({
      id: 'dsjklnsankj12831209asmdo',
      name: 'ingress-nginx',
      description: 'A Helm chart for the Ingress NGINX Controller.',
      version: '3.0.0',
      author: 'Giantswarm',
      iconURL: 'https://s.giantswarm.io/app-icons/ingress-nginx/2/icon_dark.svg',
      url: 'https://github.com/giantswarm/ingress-nginx-app',
      readmeURL: 'https://raw.githubusercontent.com/giantswarm/ingress-nginx-app/v3.0.0/README.md',
    }),
    new App({
      id: 'asdasnlkjqwe81723as9870s9',
      name: 'kong-app',
      description: 'The Cloud-Native Ingress and Service Mesh for APIs and Microservices.',
      version: '0.7.2',
      author: 'Kong',
      iconURL: 'https://s3.amazonaws.com/downloads.kong/universe/assets/icon-kong-inc-large.png',
      url: 'https://KongHQ.com/',
    }),
    new App({
      id: 'lasndlkjasdla192309123asda',
      name: 'efk-stack-app',
      description: 'Open Distro for Elasticsearch.',
      version: '0.2.0',
      author: 'Giantswarm',
      iconURL: 'https://github.com/giantswarm/efk-stack-app/raw/master/images/logo.png',
      url: 'https://github.com/giantswarm/efk-stack-app',
      readmeURL: 'https://raw.githubusercontent.com/giantswarm/efk-stack-app/v0.2.0/README.md',
    }),
    new App({
      id: 'diasdjas09812u3098asndas22',
      name: 'cert-manager-app',
      description: 'A Helm chart for cert-manager.',
      version: '1.0.7',
      author: 'Giantswarm',
      iconURL: 'https://raw.githubusercontent.com/jetstack/cert-manager/master/logo/logo.png',
      url: 'https://github.com/giantswarm/cert-manager-app',
      readmeURL: 'https://raw.githubusercontent.com/giantswarm/cert-manager-app/v1.0.7/README.md',
    }),
    new App({
      id: 'asdsadaasd123901289asdkasd',
      name: 'aqua-app-server',
      description: 'A Helm chart for the Aqua Console, Gateway Components.',
      version: '0.3.0',
      author: 'Aqua',
      iconURL: 'https://www.aquasec.com/wp-content/uploads/2016/05/aqua_logo_fullcolor.png',
      url: 'https://www.aquasec.com/',
    }),
    new App({
      id: 'asdlkjasndlas90123asdas091',
      name: 'aqua-app-scanner',
      description: 'A Helm chart for the Aqua Scanner Components.',
      version: '0.3.0',
      author: 'Aqua',
      iconURL: 'https://www.aquasec.com/wp-content/uploads/2016/05/aqua_logo_fullcolor.png',
      url: 'https://www.aquasec.com/',
    }),
    new App({
      id: 'asdaslkj123908asdn12312312',
      name: 'aqua-app-enforcer',
      description: 'A Helm chart for the Aqua Enforcer Components.',
      version: '0.3.0',
      author: 'Aqua',
      iconURL: 'https://www.aquasec.com/wp-content/uploads/2016/05/aqua_logo_fullcolor.png',
      url: 'https://www.aquasec.com/',
    }),
  ];
}
