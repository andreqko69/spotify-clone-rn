import createSelectors from './store/createSelectors';
import useCombinedStore from './store';

const useStore = () => createSelectors(useCombinedStore);

export default useStore;
