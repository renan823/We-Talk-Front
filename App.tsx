import * as React from 'react';

//Navigation
import { RootStackParamList } from './src/configs/navigation.config';
import Stacks from './src/navigation/stack';

const App: React.FC<RootStackParamList> = () => {
  return (
   <Stacks Initial={undefined} Login={undefined} Register={undefined} Tabs={undefined}/>
  );
}

export default App;