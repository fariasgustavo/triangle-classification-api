#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import GatewayRestService from '../lib/gateway-rest-service';

const app = new cdk.App();
new GatewayRestService(app, 'GatewayRestService');
