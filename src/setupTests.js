//configure the enzyme adapter for tests
//disable Lifycycles is to allow the modification of props during testing.

import requestAnimationFrame from "./tempPolyfills"

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });
