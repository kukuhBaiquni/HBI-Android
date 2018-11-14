/** @format */

import {AppRegistry} from 'react-native';
import Splash from './components/Splash_Screen';
import { Tabs } from './components/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Tabs);
