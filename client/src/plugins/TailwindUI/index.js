import '@/assets/css/tailwind.css';
import '@/assets/css/transitions.scss';
import TwInput from '@/plugins/TailwindUI/TwInput/TwInput';
import TwButton from '@/plugins/TailwindUI/TwButton/TwButton';
import TwAutocomplete from '@/plugins/TailwindUI/TwAutocomplete/TwAutocomplete';
import TwAutocompleteItem from '@/plugins/TailwindUI/TwAutocomplete/TwAutocompleteItem';

// TODO Task-1: add the UI components
const TailwindUI = {
  TwInput,
  TwButton,
  TwAutocomplete,
  TwAutocompleteItem
};

// https://vuejs.org/v2/guide/plugins.html
TailwindUI.install = (Vue, options = {}) => {
  // TODO Task-2: install all your components
  // hint: you can use an for loop to iterate over the TailwindUI object
  // and declare it as global components
  Object.values(TailwindUI).forEach((component) => component.name && Vue.component(component.name, component));
};

export default TailwindUI;
