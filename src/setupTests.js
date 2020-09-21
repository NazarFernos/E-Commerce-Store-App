import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// configure({
//     adapter: new Adapter(),
//     //disableLifecycleMethods: true
// });

//Enzyme.configure({ adapter: new Adapter() })