import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

interface DynamicModuleLoaderProps {
  children: ReactNode;
  name: StateSchemaKey;
  reducer: Reducer;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children,
  name,
  reducer,
  removeAfterUnmount,
}: DynamicModuleLoaderProps) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    store.reducerManager.add(name, reducer);
    dispatch({ type: `@INIT ${name} reducer` });

    return () => {
      if (removeAfterUnmount) {
        store.reducerManager.remove(name);
        dispatch({ type: `@DESTROY ${name} reducer` });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
